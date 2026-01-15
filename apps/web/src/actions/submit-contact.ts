'use server';

import { z } from 'zod';
import { verifyTurnstile } from '@/lib/turnstile'; // Helper to call Cloudflare API

const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Please tell us more about your project"),
  token: z.string().min(1, "Security check failed")
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  
  // 1. Zod Validation
  const validated = ContactSchema.safeParse(rawData);
  if (!validated.success) {
    return { success: false, errors: validated.error.flatten().fieldErrors };
  }

  // 2. Turnstile Verification
  const isHuman = await verifyTurnstile(validated.data.token);
  if (!isHuman) {
    return { success: false, message: "Security check failed. Please refresh." };
  }

  // 3. Send to Backend (or Email)
  try {
    // TODO: Connect to email service or CMS
    console.log("Form submitted:", validated.data);
    
    // Simulating success for now
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return { success: true, message: "Request received. We will be in touch shortly." };
  } catch (e) {
    console.error(e);
    return { success: false, message: "System error. Please contact us via email." };
  }
}