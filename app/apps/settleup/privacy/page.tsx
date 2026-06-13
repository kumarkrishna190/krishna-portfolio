import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import AppLegalNav from "@/components/AppLegalNav";

const BASE_PATH = "/apps/settleup";
const SUPPORT_EMAIL = "ikigai.applications@gmail.com";
const LAST_UPDATED = "June 11, 2026";

export const metadata = {
  title: "SettleUp Privacy Policy",
  description:
    "Privacy policy for SettleUp, a shared expense tracker by IKIGAI APPLICATIONS.",
  openGraph: {
    title: "SettleUp Privacy Policy",
    description:
      "Privacy policy for SettleUp, a shared expense tracker by IKIGAI APPLICATIONS.",
    type: "website",
    locale: "en_IN",
    siteName: "Krishna Kumar",
  },
};

export default function SettleUpPrivacyPage() {
  return (
    <>
      <PageHeader
        title="SettleUp Privacy Policy"
        subtitle={`Last updated: ${LAST_UPDATED}`}
      />

      <AppLegalNav basePath={BASE_PATH} current="privacy" />

      <Section title="Overview">
        <p>
          This Privacy Policy describes how IKIGAI APPLICATIONS (&quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;) collects, uses, and shares information when you use the SettleUp
          mobile application (the &quot;App&quot;).
        </p>
        <p>
          SettleUp helps you track shared expenses, split bills with friends, and
          settle balances across groups. By creating an account or using the App, you
          agree to the practices described in this policy.
        </p>
      </Section>

      <Section title="Information We Collect">
        <p>
          <strong>Account information:</strong> When you sign up, we collect your email
          address and authentication credentials managed through Firebase Authentication.
          You may optionally provide your name, phone number, profile photo, and
          preferred currency.
        </p>
        <p>
          <strong>Expense and group data:</strong> Information you add to the App,
          including group names, member participation, expense amounts, split details,
          settlement records, and activity history, is stored in our cloud database
          (Google Firebase Firestore) so it can sync across your devices and group
          members.
        </p>
        <p>
          <strong>Device and usage data:</strong> We may collect device identifiers,
          operating system version, and App usage needed to deliver core features,
          prevent abuse, and improve reliability.
        </p>
        <p>
          <strong>Push notification tokens:</strong> If you subscribe to SettleUp Pro
          and enable notifications, we store a device push token to send activity
          alerts about expenses and settlements in your groups.
        </p>
        <p>
          <strong>Advertising data (free tier):</strong> If you use the free version
          of the App, Google AdMob may collect device identifiers, IP address, and ad
          interaction data to deliver and measure ads. Pro subscribers do not see ads.
        </p>
      </Section>

      <Section title="How We Use Information">
        <p>We use collected information to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Create and manage your account</li>
          <li>Sync groups, expenses, balances, and settlements with other members</li>
          <li>Display your profile and currency preferences</li>
          <li>Send push notifications for group activity (Pro users who opt in)</li>
          <li>Process in-app subscription purchases through Google Play</li>
          <li>Display advertisements on the free tier</li>
          <li>Maintain security, troubleshoot issues, and enforce our terms</li>
        </ul>
        <p>
          We do not sell your personal information. We do not use your expense data for
          advertising profiling.
        </p>
      </Section>

      <Section title="How Information Is Shared">
        <p>
          <strong>With group members:</strong> Expense and balance information you add
          to a group is visible to other members of that group.
        </p>
        <p>
          <strong>With service providers:</strong> We use trusted third-party services
          to operate the App, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Google Firebase (Authentication, Firestore, Cloud Messaging, Storage) —{" "}
            <a
              href="https://firebase.google.com/support/privacy"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              firebase.google.com/support/privacy
            </a>
          </li>
          <li>
            Google AdMob (free tier ads) —{" "}
            <a
              href="https://policies.google.com/privacy"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/privacy
            </a>
          </li>
          <li>Google Play Billing (SettleUp Pro subscriptions)</li>
        </ul>
        <p>
          These providers process data under their own privacy policies and only as
          needed to deliver their services.
        </p>
        <p>
          <strong>Legal requirements:</strong> We may disclose information if required
          by law, court order, or to protect the rights, safety, and security of users
          and our services.
        </p>
      </Section>

      <Section title="Data Retention">
        <p>
          We retain your account and group data while your account is active and as
          needed to provide the App. If you request account deletion, we will delete
          or anonymize your personal data within a reasonable period, except where
          retention is required by law or legitimate business needs (such as resolving
          disputes).
        </p>
        <p>
          Local preferences stored on your device (such as theme settings) remain until
          you clear App storage or uninstall the App.
        </p>
      </Section>

      <Section title="Your Choices and Rights">
        <p>
          You can update your profile, currency, and notification preferences in the
          App. You may disable push notifications at any time in App settings or
          through your device settings.
        </p>
        <p>
          You may opt out of personalized advertising through your Android device
          settings. Pro subscribers can remove ads entirely by upgrading to SettleUp
          Pro.
        </p>
        <p>
          Depending on your jurisdiction, you may have rights to access, correct, or
          delete your personal data. Contact us using the email below to make a
          request.
        </p>
      </Section>

      <Section title="Security">
        <p>
          We use industry-standard measures, including encrypted connections and
          Firebase security rules, to protect your data. No method of transmission or
          storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </Section>

      <Section title="Children's Privacy">
        <p>
          SettleUp is not directed at children under 13. We do not knowingly collect
          personal information from children under 13. If you believe a child has
          provided us with personal information, contact us and we will take steps to
          delete it.
        </p>
      </Section>

      <Section title="International Users">
        <p>
          Your information may be processed and stored on servers operated by our
          service providers, which may be located outside your country. By using the
          App, you consent to this processing where permitted by applicable law.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will update the
          &quot;Last updated&quot; date at the top of this page. Continued use of the App
          after changes constitutes acceptance of the updated policy.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          Questions about this Privacy Policy? Contact IKIGAI APPLICATIONS at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="underline">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </Section>
    </>
  );
}
