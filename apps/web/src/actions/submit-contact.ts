'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { verifyTurnstile } from '@/lib/turnstile';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Please tell us more"),
  token: z.string().min(1, "Security check failed"),
  source: z.enum(["inquiry", "support"]).default("inquiry"),
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
    const { name, email, message, source } = validated.data;
    const contactEmail = process.env.CONTACT_EMAIL || 'sales@such.software';

    const isSupport = source === 'support';
    const subject = isSupport
      ? `App feedback from ${name}`
      : `New inquiry from ${name}`;
    const heading = isSupport ? 'App Support / Feedback' : 'New Project Inquiry';

    const { error } = await resend.emails.send({
      from: 'Such Software <noreply@such.software>',
      to: isSupport ? 'apps@such.software' : contactEmail,
      replyTo: email,
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>${heading}</h2>
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

    return { success: true, message: isSupport
      ? "Thanks for your feedback! We'll get back to you shortly."
      : "Request received. We will be in touch shortly."
    };
  } catch (e) {
    console.error('Email error:', e);
    return { success: false, message: "System error. Please contact us via email." };
  }
}
