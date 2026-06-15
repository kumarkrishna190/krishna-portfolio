import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import AppLegalNav from "@/components/AppLegalNav";

const BASE_PATH = "/apps/familytree";
const SUPPORT_EMAIL = "ikigai.applications@gmail.com";
const LAST_UPDATED = "June 14, 2026";

export const metadata = {
  title: "Family Tree Privacy Policy",
  description:
    "Privacy policy for Family Tree, a local family tree builder by IKIGAI APPLICATIONS.",
  openGraph: {
    title: "Family Tree Privacy Policy",
    description:
      "Privacy policy for Family Tree, a local family tree builder by IKIGAI APPLICATIONS.",
    type: "website",
    locale: "en_IN",
    siteName: "Krishna Kumar",
  },
};

export default function FamilyTreePrivacyPage() {
  return (
    <>
      <PageHeader
        title="Family Tree Privacy Policy"
        subtitle={`Last updated: ${LAST_UPDATED}`}
      />

      <AppLegalNav basePath={BASE_PATH} current="privacy" />

      <Section title="Overview">
        <p>
          This Privacy Policy describes how IKIGAI APPLICATIONS (&quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;) handles information when you use the Make My Family Tree mobile
          application (the &quot;App&quot;), also referred to as Family Tree.
        </p>
        <p>
          Family Tree helps you build and explore a family tree on your device — add
          members, link relationships, find how people are related, and share a text
          summary of your tree. By using the App, you agree to the practices described
          in this policy.
        </p>
      </Section>

      <Section title="Information We Collect">
        <p>
          The App is designed to keep your family data on your device. We do not
          require you to create an account, and we do not operate a cloud service that
          stores your family tree.
        </p>
        <p>
          <strong>Family data you enter:</strong> Names, dates, gender, relationship
          links (such as parent, spouse, or child), notes, and optional profile photos
          you add in the App are stored locally on your device using on-device
          database storage. This data is not transmitted to our servers.
        </p>
        <p>
          <strong>Photos:</strong> If you choose to add a member photo, the App uses
          your device&apos;s photo picker. Selected images are stored locally with that
          member&apos;s record. We do not upload photos to our servers.
        </p>
        <p>
          <strong>Share feature:</strong> When you use &quot;Share&quot;, the App generates a
          text summary of your tree and opens your device&apos;s standard share sheet. What
          you share and with whom is entirely your choice; we do not receive a copy of
          shared content.
        </p>
        <p>
          <strong>Advertising data:</strong> The App displays banner advertisements
          through Google AdMob. AdMob and its partners may collect device identifiers,
          IP address, ad interaction data, and similar information to deliver and
          measure ads. See{" "}
          <a
            href="https://policies.google.com/privacy"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Privacy Policy
          </a>{" "}
          for details.
        </p>
        <p>
          We do not collect precise location data, contacts, call logs, microphone
          audio, or other sensitive personal information through the App beyond what
          you explicitly enter for your family tree.
        </p>
      </Section>

      <Section title="How We Use Information">
        <p>Information stored on your device is used solely to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Display and organize your family tree</li>
          <li>Calculate and label relationships between members</li>
          <li>Let you edit members and export or share a text summary</li>
        </ul>
        <p>
          Advertising partners use collected data to show ads, prevent fraud, and
          measure ad performance. We do not use your family tree data for advertising
          profiling.
        </p>
      </Section>

      <Section title="Third-Party Services">
        <p>The App uses the following third-party services that may process data:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Google AdMob — advertising (
            <a
              href="https://policies.google.com/privacy"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/privacy
            </a>
            )
          </li>
          <li>Google Play Services — as required by your Android device</li>
        </ul>
        <p>
          These services have their own privacy policies governing their use of your
          information.
        </p>
      </Section>

      <Section title="Data Retention">
        <p>
          Family tree data remains on your device until you delete members, clear the
          App&apos;s storage, or uninstall the App. We do not retain copies on our servers
          because we do not receive that data.
        </p>
        <p>Advertising partners retain data according to their own policies.</p>
      </Section>

      <Section title="Your Rights and Choices">
        <p>
          You can edit or delete member records at any time within the App. You may
          remove all local data by clearing the App&apos;s storage or reinstalling it.
        </p>
        <p>
          You may disable personalized advertising through your Android device settings
          (e.g., &quot;Opt out of Ads Personalization&quot;).
        </p>
        <p>
          Because your tree is stored locally, backing up your device (if enabled in
          your system settings) may include App data. We recommend treating family
          information as sensitive and sharing exports only with people you trust.
        </p>
        <p>
          Depending on your jurisdiction, you may have rights regarding personal data
          processed by advertising partners. Contact us using the email below if you
          have questions.
        </p>
      </Section>

      <Section title="Security">
        <p>
          Your family tree data stays on your device under your control. We take
          reasonable measures in the App&apos;s design to avoid unnecessary data collection.
          However, no method of electronic storage is completely secure, and you are
          responsible for securing access to your device.
        </p>
      </Section>

      <Section title="Children's Privacy">
        <p>
          The App is not directed at children under 13. We do not knowingly collect
          personal information from children under 13 through our servers. If a child
          uses the App, any information they enter is stored only on the device. If you
          believe a child has provided information inappropriately, contact us and we
          will help where we can.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will update the
          &quot;Last updated&quot; date at the top of this page. Continued use of the App after
          changes constitutes acceptance of the updated policy.
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
