import { redirect } from "next/navigation";

// /contact is a shortcut straight to the contact form on the home page.
export default function ContactPage() {
  redirect("/#contact");
}
