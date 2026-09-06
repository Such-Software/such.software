type Umami = { track: (name: string, data?: Record<string, unknown>) => void };

/**
 * Record a named event, if and only if analytics are already running.
 *
 * There is no event in this codebase today, which is why every argument about the site's copy
 * has been an argument about taste. Two events (a visitor starting the contact form, and one
 * completing it) turn the next rewrite into a before-and-after.
 *
 * This deliberately does no consent checking of its own. `UmamiAnalytics` already declines to
 * load the script under Global Privacy Control, and the script itself honours Do Not Track, so
 * `window.umami` is simply absent for a visitor who opted out and every call here is a no-op.
 * Re-implementing the gate would give it a second place to be wrong, and the two could disagree.
 *
 * Never throws: an analytics call is not worth breaking a form submission over.
 */
export function track(name: string, data?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const umami = (window as unknown as { umami?: Umami }).umami;
  if (!umami?.track) return;
  try {
    umami.track(name, data);
  } catch {
    // Swallowed on purpose. See above.
  }
}

/**
 * The event names, in one place so a typo cannot quietly create a second funnel that looks
 * empty. Values are the strings that appear in the dashboard.
 */
export const EVENTS = {
  contactStarted: "contact-started",
  contactSubmitted: "contact-submitted",
} as const;
