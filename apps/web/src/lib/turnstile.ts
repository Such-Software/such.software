const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export type TurnstileResult =
  | { ok: true }
  | { ok: false; reason: "unconfigured" | "rejected" | "unreachable" };

/**
 * Verify a Turnstile token, failing CLOSED.
 *
 * This used to `return true` whenever TURNSTILE_SECRET_KEY was unset, and log the token while
 * it did it. That is a capability enabled by the absence of configuration: lose the variable in
 * a deploy and the contact form silently stops checking anything, with the only trace a warning
 * in a log nobody reads. A guard that turns itself off when it cannot find its key is not a
 * guard. Missing configuration is now a refusal, and the caller is told which kind, because
 * "we are misconfigured" and "you look like a bot" need different answers.
 *
 * The local-development bypass survives, but as an explicit switch rather than as a side effect
 * of an empty variable: set TURNSTILE_DEV_BYPASS=1, and it is ignored in a production build so
 * that setting it by accident cannot follow the code into a deploy.
 */
export async function verifyTurnstile(token: string): Promise<TurnstileResult> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    if (
      process.env.TURNSTILE_DEV_BYPASS === "1" &&
      process.env.NODE_ENV !== "production"
    ) {
      console.warn(
        "turnstile: TURNSTILE_DEV_BYPASS=1, skipping verification (development only)",
      );
      return { ok: true };
    }
    // Never log the token: it is a single-use credential presented by the visitor.
    console.error(
      "turnstile: TURNSTILE_SECRET_KEY is not set, so submissions cannot be verified and are " +
        "refused. Set it, or set TURNSTILE_DEV_BYPASS=1 for local development.",
    );
    return { ok: false, reason: "unconfigured" };
  }

  const body = new FormData();
  body.append("secret", secretKey);
  body.append("response", token);

  try {
    const res = await fetch(VERIFY_URL, { method: "POST", body });
    if (!res.ok) {
      console.error(
        `turnstile: siteverify answered ${res.status} ${res.statusText}`,
      );
      return { ok: false, reason: "unreachable" };
    }
    const data = (await res.json()) as {
      success?: boolean;
      "error-codes"?: string[];
    };
    if (data.success) return { ok: true };
    // The error codes name the cause (expired token, duplicate submission, bad secret) and
    // contain no visitor data, so they are the useful half to keep.
    console.warn(
      `turnstile: rejected (${(data["error-codes"] ?? ["no reason given"]).join(", ")})`,
    );
    return { ok: false, reason: "rejected" };
  } catch (e) {
    console.error("turnstile: could not reach siteverify:", e);
    return { ok: false, reason: "unreachable" };
  }
}
