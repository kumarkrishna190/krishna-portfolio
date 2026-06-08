import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export const metadata = {
  title: "PingMe Privacy Policy",
  description:
    "Privacy policy for PingMe, a communication launcher by IKIGAI APPLICATIONS.",
  openGraph: {
    title: "PingMe Privacy Policy",
    description:
      "Privacy policy for PingMe, a communication launcher by IKIGAI APPLICATIONS.",
    type: "website",
    locale: "en_IN",
    siteName: "Krishna Kumar",
  },
};

export default function PingMePrivacyPage() {
  return (
    <>
      <PageHeader
        title="PingMe Privacy Policy"
        subtitle="Last updated: June 5, 2026"
      />

      <p className="mb-8 text-sm text-gray-600 dark:text-gray-400">
        <Link href="/apps" className="underline">
          ← Apps
        </Link>
      </p>

      <Section title="Overview">
        <p>
          PingMe is a communication launcher that helps you contact phone numbers
          through your preferred apps without saving them as contacts.
        </p>
      </Section>

      <Section title="Data We Collect">
        <p>
          PingMe stores data <strong>locally on your device only</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Recently used phone numbers (up to 50 entries in PingMe History)</li>
          <li>Your channel preferences, message templates, and settings</li>
          <li>Optional usage counters (launch counts for ads), stored on-device only</li>
        </ul>
        <p>
          We do not create user accounts or upload your contact history to our
          servers.
        </p>
      </Section>

      <Section title="Optional Device Permissions">
        <p>Core features work without granting any permissions. Optional features:</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="py-2 pr-4 text-left font-semibold">Permission</th>
                <th className="py-2 pr-4 text-left font-semibold">Purpose</th>
                <th className="py-2 text-left font-semibold">Required?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 pr-4">Contacts</td>
                <td className="py-2 pr-4">Name suggestions while typing; optional phone recents</td>
                <td className="py-2">No</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 pr-4">Call log</td>
                <td className="py-2 pr-4">Optional Recent tab showing your recent calls</td>
                <td className="py-2">No</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Camera</td>
                <td className="py-2 pr-4">QR code scanner</td>
                <td className="py-2">No</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Data read through contacts or call log stays on your device and is never
          transmitted to us.
        </p>
      </Section>

      <Section title="Clipboard Access">
        <p>
          When you open the app, PingMe may read your clipboard to detect copied
          phone numbers. Clipboard content is processed on-device and is never
          transmitted to us.
        </p>
      </Section>

      <Section title="Third-Party Services">
        <p>
          When you tap a channel, PingMe opens third-party apps (Phone, SMS,
          WhatsApp, Telegram, Signal, etc.) governed by their own policies.
        </p>
        <p>
          PingMe displays ads via Google AdMob. AdMob may collect device
          identifiers per{" "}
          <a
            href="https://policies.google.com/privacy"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Privacy Policy
          </a>
          .
        </p>
      </Section>

      <Section title="Data Retention">
        <p>
          History and preferences remain on your device until you clear them or
          uninstall the app.
        </p>
      </Section>

      <Section title="Children's Privacy">
        <p>PingMe is not directed at children under 13.</p>
      </Section>

      <Section title="Contact">
        <p>
          Questions? Email{" "}
          <a
            href="mailto:ikigai.applications@gmail.com"
            className="underline"
          >
            ikigai.applications@gmail.com
          </a>
        </p>
      </Section>
    </>
  );
}
