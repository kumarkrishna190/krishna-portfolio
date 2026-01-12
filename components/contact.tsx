"use client";

import { useFormState } from "react-dom";
import { submitContact } from "../app/contact/actions";

const initialState = { success: null };

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);

  return (
    <div className="max-w-md">
      <form action={formAction} className="space-y-4">
        <input
          name="name"
          required
          placeholder="Name"
          className="border p-2 w-full dark:bg-gray-900"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="border p-2 w-full dark:bg-gray-900"
        />
        <textarea
          name="message"
          required
          placeholder="Message"
          className="border p-2 w-full dark:bg-gray-900"
        />

        <button
          type="submit"
          className="border px-4 py-2"
        >
          Send
        </button>
      </form>

      {state.success === true && (
        <p className="mt-4 text-green-600">
          Message sent successfully.
        </p>
      )}

      {state.success === false && (
        <p className="mt-4 text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
