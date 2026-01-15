export async function verifyTurnstile(token: string) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.warn("No TURNSTILE_SECRET_KEY set, skipping verification", token);
    return true; // Dev mode bypass
  }
  
  const formData = new FormData();
  formData.append('secret', secretKey);
  formData.append('response', token);

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();
  return data.success;
}