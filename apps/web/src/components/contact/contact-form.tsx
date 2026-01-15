'use client';
import { useFormState, useFormStatus } from 'react-dom'; // Note: check react-dom version for useFormState support or import from hook
// Next.js 14 uses react-dom for these
import { submitContactForm } from '@/actions/submit-contact';
import { TurnstileWidget } from './turnstile-widget';
import { useState } from 'react';
import { Button } from '@repo/ui/components/button';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, { success: false, message: '' });
  const [token, setToken] = useState<string>('');

  return (
    <form action={formAction} className="space-y-4 max-w-md mx-auto p-4 border rounded-lg bg-card text-card-foreground">
       <h3 className="text-xl font-bold">Contact Us</h3>
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input name="name" id="name" required className="w-full mt-1 p-2 border rounded bg-background" />
        {state?.errors?.name && <p className="text-red-500 text-xs">{state.errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input name="email" id="email" type="email" required className="w-full mt-1 p-2 border rounded bg-background" />
        {state?.errors?.email && <p className="text-red-500 text-xs">{state.errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">Message</label>
        <textarea name="message" id="message" required className="w-full mt-1 p-2 border rounded bg-background h-32" />
        {state?.errors?.message && <p className="text-red-500 text-xs">{state.errors.message}</p>}
      </div>

      <input type="hidden" name="token" value={token} />
      
      <div className="my-4">
        <TurnstileWidget onVerify={setToken} />
      </div>

      <SubmitButton />
      
      {state?.message && (
        <p className={`text-sm ${state.success ? 'text-green-500' : 'text-red-500'}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}