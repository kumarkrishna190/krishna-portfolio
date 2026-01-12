"use client";

import { useFormState } from "react-dom";
import { submitContact, type ContactState } from "@/app/contact/actions";

const initialState: ContactState = { success: false };

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);

  return (
    <div className="max-w-md">
      <form action={formAction} className="space-y-4">
        <input
          name="name"
          required
          placeholder="Name"
          className="border p-2 w-full"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="border p-2 w-full"
        />
        <textarea
          name="message"
          required
          placeholder="Message"
          className="border p-2 w-full"
        />
        <button type="submit" className="border px-4 py-2">
          Send
        </button>
      </form>

      {state.success && (
        <p className="mt-4 text-green-600">
          Message sent successfully.
        </p>
      )}
    </div>
  );
}
