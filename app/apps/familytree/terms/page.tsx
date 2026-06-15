import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import AppLegalNav from "@/components/AppLegalNav";

const BASE_PATH = "/apps/familytree";
const SUPPORT_EMAIL = "ikigai.applications@gmail.com";
const LAST_UPDATED = "June 14, 2026";

export const metadata = {
  title: "Family Tree Terms & Conditions",
  description:
    "Terms and conditions for Family Tree, a local family tree builder by IKIGAI APPLICATIONS.",
  openGraph: {
    title: "Family Tree Terms & Conditions",
    description:
      "Terms and conditions for Family Tree, a local family tree builder by IKIGAI APPLICATIONS.",
    type: "website",
    locale: "en_IN",
    siteName: "Krishna Kumar",
  },
};

export default function FamilyTreeTermsPage() {
  return (
    <>
      <PageHeader
        title="Family Tree Terms & Conditions"
        subtitle={`Last updated: ${LAST_UPDATED}`}
      />

      <AppLegalNav basePath={BASE_PATH} current="terms" />

      <Section title="Agreement">
        <p>
          These Terms & Conditions (&quot;Terms&quot;) govern your use of the Make My Family
          Tree mobile application (the &quot;App&quot;), also referred to as Family Tree,
          provided by IKIGAI APPLICATIONS (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
        </p>
        <p>
          By downloading, installing, or using the App, you agree to these Terms. If
          you do not agree, do not use the App.
        </p>
      </Section>

      <Section title="The Service">
        <p>
          Family Tree is a personal family tree tool. It lets you add family members,
          link relationships, visualize connections, find how two people are related,
          and share a text summary of your tree.
        </p>
        <p>
          The App stores data locally on your device. We do not provide cloud backup,
          sync, or recovery services. You are responsible for maintaining backups of
          your device if you want to preserve your tree.
        </p>
        <p>
          Relationship labels and paths shown in the App are generated from the
          information you enter. They are for personal reference only and may not
          reflect legal, genealogical, or cultural definitions in every context.
        </p>
      </Section>

      <Section title="Your Content and Responsibilities">
        <p>
          You are solely responsible for the accuracy of information you enter and for
          obtaining any consent needed before adding details about other people,
          including names, photos, and relationship data.
        </p>
        <p>
          Do not use the App to store or share unlawful, harassing, defamatory, or
          infringing content. Do not add information about others without a legitimate
          personal purpose and appropriate permission where required.
        </p>
        <p>
          When you use the share feature, you choose what to send and to whom. We are
          not responsible for how you distribute exported tree information.
        </p>
      </Section>

      <Section title="License">
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable license to
          use the App for personal, non-commercial purposes, subject to these Terms and
          applicable app store rules.
        </p>
        <p>
          You may not copy, modify, distribute, sell, reverse engineer, or create
          derivative works of the App except as permitted by law.
        </p>
      </Section>

      <Section title="Advertising">
        <p>
          The App is supported by third-party banner advertisements through Google
          AdMob. Your interaction with ads is subject to the ad provider&apos;s terms and
          policies.
        </p>
        <p>
          We are not responsible for the content of third-party advertisements or
          external websites linked from ads.
        </p>
      </Section>

      <Section title="Acceptable Use">
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the App for unlawful, deceptive, or harmful purposes</li>
          <li>Attempt to interfere with or disrupt the App or its advertising systems</li>
          <li>Reverse engineer or circumvent security or usage restrictions</li>
          <li>Upload malware or content that infringes others&apos; rights</li>
        </ul>
      </Section>

      <Section title="Disclaimer of Warranties">
        <p>
          THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY
          KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT.
        </p>
        <p>
          We do not warrant that the App will be uninterrupted, error-free, that
          relationship results will always be accurate, or that local data will never
          be lost due to device failure, uninstallation, or clearing App storage.
        </p>
      </Section>

      <Section title="Limitation of Liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY
          LOSS OF DATA, PROFITS, OR GOODWILL, ARISING FROM YOUR USE OF THE APP OR
          RELIANCE ON RELATIONSHIP LABELS OR TREE INFORMATION DISPLAYED IN THE APP.
        </p>
        <p>
          Our total liability for any claim relating to the App shall not exceed one
          hundred Indian rupees (₹100).
        </p>
      </Section>

      <Section title="Intellectual Property">
        <p>
          The App, including its code, design, branding, and content (excluding
          third-party components), is owned by us or our licensors and protected by
          intellectual property laws. These Terms do not grant you ownership rights in
          the App.
        </p>
      </Section>

      <Section title="Termination">
        <p>
          You may stop using the App at any time by uninstalling it from your device.
          We may suspend or terminate availability of the App if continued use would
          violate these Terms or harm the service or other users.
        </p>
        <p>
          Upon termination, your right to use the App ends. Provisions that by their
          nature should survive termination will remain in effect.
        </p>
      </Section>

      <Section title="Changes to These Terms">
        <p>
          We may modify these Terms at any time. We will update the &quot;Last updated&quot;
          date when changes are made. Your continued use of the App after changes
          constitutes acceptance of the revised Terms.
        </p>
      </Section>

      <Section title="Governing Law">
        <p>
          These Terms are governed by the laws of India, without regard to conflict of
          law principles, except where mandatory local consumer protection laws in your
          jurisdiction apply.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          For questions about these Terms, contact IKIGAI APPLICATIONS at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="underline">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </Section>
    </>
  );
}
