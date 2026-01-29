'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { verifyTurnstile } from '@/lib/turnstile';

const resend = new Resend(process.env.RESEND_API_KEY);

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

  // 3. Send email via Resend
  try {
    const { name, email, message } = validated.data;
    const contactEmail = process.env.CONTACT_EMAIL || 'sales@such.software';

    const { error } = await resend.emails.send({
      from: 'Such Software <noreply@such.software>',
      to: contactEmail,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, message: "Failed to send message. Please try again." };
    }

    return { success: true, message: "Request received. We will be in touch shortly." };
  } catch (e) {
    console.error('Email error:', e);
    return { success: false, message: "System error. Please contact us via email." };
  }
}