'use client';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm } from '@/actions/submit-contact';
import { TurnstileWidget } from './turnstile-widget';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@repo/ui/components/button';

function SubmitButton({ label = "Send Message" }: { label?: string }) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      size="lg"
      className="w-full md:w-64 rounded-xl text-lg font-semibold"
    >
      {pending ? "Sending..." : label}
    </Button>
  );
}

interface ContactFormProps {
  source?: 'inquiry' | 'support';
}

export function ContactForm({ source = 'inquiry' }: ContactFormProps) {
  const [state, formAction] = useActionState(submitContactForm, { success: false, message: '' });
  const [token, setToken] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  const isSupport = source === 'support';

  // Reset form on successful submission
  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
      setToken('');
    }
  }, [state.success]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="space-y-8 w-full max-w-6xl mx-auto section-container"
    >
       <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
       <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -ml-32 -mb-32" />

       <div className="text-left mb-10 relative z-10">
          <h3 className="text-3xl font-bold tracking-tight">
            {isSupport ? 'Send Feedback' : 'Project Inquiry'}
          </h3>
          <p className="text-muted-foreground text-lg mt-3 max-w-2xl text-balance">
            {isSupport
              ? 'Found a bug? Have a feature request? We read every message and typically respond within 24 hours.'
              : 'Tell us about your technical challenges. From Medusa v2 migrations to real-time custom engines, we\'re ready to architect your solution.'}
          </p>
       </div>

      <input type="hidden" name="source" value={source} />

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        <div className="space-y-3">
          <label htmlFor="name" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground ml-1">
            {isSupport ? 'Your Name' : 'Full Name'}
          </label>
          <input
            name="name"
            id="name"
            placeholder={isSupport ? "Your name" : "Jamie Doe"}
            required
            aria-describedby={state?.errors?.name ? "name-error" : undefined}
            aria-invalid={state?.errors?.name ? "true" : undefined}
            className="w-full p-4 border-2 border-border/50 rounded-2xl bg-background/50 focus:ring-4 focus:ring-primary/10 focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all text-lg"
          />
          {state?.errors?.name && <p id="name-error" className="text-red-500 text-sm px-1" role="alert">{state.errors.name}</p>}
        </div>

        <div className="space-y-3">
          <label htmlFor="email" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground ml-1">
            {isSupport ? 'Email' : 'Work Email'}
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder={isSupport ? "your@email.com" : "jamie@example.com"}
            required
            aria-describedby={state?.errors?.email ? "email-error" : undefined}
            aria-invalid={state?.errors?.email ? "true" : undefined}
            className="w-full p-4 border-2 border-border/50 rounded-2xl bg-background/50 focus:ring-4 focus:ring-primary/10 focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all text-lg"
          />
          {state?.errors?.email && <p id="email-error" className="text-red-500 text-sm px-1" role="alert">{state.errors.email}</p>}
        </div>
      </div>

      <div className="space-y-3 relative z-10">
        <label htmlFor="message" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground ml-1">
          {isSupport ? 'Your Message' : 'Project Details'}
        </label>
        <textarea
          name="message"
          id="message"
          placeholder={isSupport
            ? "Describe the issue or suggestion. Include your device, OS version, and game version if reporting a bug..."
            : "What are you building? Mention any specific constraints, timelines, or technologies..."}
          required
          aria-describedby={state?.errors?.message ? "message-error" : undefined}
          aria-invalid={state?.errors?.message ? "true" : undefined}
          className="w-full p-6 border-2 border-border/50 rounded-2xl bg-background/50 h-56 resize-none focus:ring-4 focus:ring-primary/10 focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all text-lg leading-relaxed"
        />
        {state?.errors?.message && <p id="message-error" className="text-red-500 text-sm px-1" role="alert">{state.errors.message}</p>}
      </div>

      <input type="hidden" name="token" value={token} />
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4 relative z-10 border-t border-border/50">
        <div className="scale-100 flex items-center gap-3">
          <TurnstileWidget onVerify={setToken} />
          <p className="text-[10px] text-muted-foreground max-w-[120px] leading-tight">
            Protected by Cloudflare Turnstile to ensure human delivery.
          </p>
        </div>
        <div className="w-full md:w-auto">
          <SubmitButton label={isSupport ? "Send Feedback" : "Send Message"} />
        </div>
      </div>
      
      {state?.message && (
        <div
          role="status"
          aria-live="polite"
          className={`mt-8 p-6 rounded-2xl text-base border-l-4 relative z-10 ${
            state.success
              ? "bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-400"
              : "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-xl" aria-hidden="true">{state.success ? "\u2713" : "\u26A0"}</span>
            <p className="font-medium">{state.message}</p>
          </div>
        </div>
      )}
    </form>
  );
}
