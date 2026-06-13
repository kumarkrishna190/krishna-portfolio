import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import AppLegalNav from "@/components/AppLegalNav";

const BASE_PATH = "/apps/settleup";
const SUPPORT_EMAIL = "ikigai.applications@gmail.com";
const LAST_UPDATED = "June 11, 2026";

export const metadata = {
  title: "SettleUp Terms & Conditions",
  description:
    "Terms and conditions for SettleUp, a shared expense tracker by IKIGAI APPLICATIONS.",
  openGraph: {
    title: "SettleUp Terms & Conditions",
    description:
      "Terms and conditions for SettleUp, a shared expense tracker by IKIGAI APPLICATIONS.",
    type: "website",
    locale: "en_IN",
    siteName: "Krishna Kumar",
  },
};

export default function SettleUpTermsPage() {
  return (
    <>
      <PageHeader
        title="SettleUp Terms & Conditions"
        subtitle={`Last updated: ${LAST_UPDATED}`}
      />

      <AppLegalNav basePath={BASE_PATH} current="terms" />

      <Section title="Agreement">
        <p>
          These Terms & Conditions (&quot;Terms&quot;) govern your use of the SettleUp mobile
          application (the &quot;App&quot;) provided by IKIGAI APPLICATIONS (&quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;).
        </p>
        <p>
          By creating an account, downloading, or using the App, you agree to these
          Terms. If you do not agree, do not use the App.
        </p>
      </Section>

      <Section title="The Service">
        <p>
          SettleUp is a shared expense tracking tool. It helps groups record expenses,
          calculate balances, and record settlements. The App is not a bank, payment
          processor, or financial advisor. It does not move money between users.
        </p>
        <p>
          You are responsible for verifying amounts, splits, and settlements with other
          group members. Displayed balances are based on data entered by users and may
          contain errors if information is incorrect or incomplete.
        </p>
      </Section>

      <Section title="Account Responsibilities">
        <p>
          You must provide accurate account information and keep your login credentials
          secure. You are responsible for activity under your account.
        </p>
        <p>
          You agree to use the App lawfully and only share accurate expense information.
          Do not upload harmful, abusive, fraudulent, or misleading content.
        </p>
      </Section>

      <Section title="Group Data">
        <p>
          When you join or create a group, other members can see the expense and balance
          information associated with that group. Only add people you trust and only
          share information you are comfortable disclosing to group members.
        </p>
        <p>
          We may limit or suspend accounts that abuse the service, attempt unauthorized
          access, harass other users, or violate applicable laws.
        </p>
      </Section>

      <Section title="Free Tier and SettleUp Pro">
        <p>
          The App offers a free tier with usage limits and advertising, and an optional
          paid subscription called SettleUp Pro.
        </p>
        <p>
          SettleUp Pro is billed annually through Google Play at the price shown in the
          App (currently ₹99/year in India, subject to change). Subscription terms,
          renewals, cancellations, and refunds are governed by Google Play&apos;s billing
          policies. You can manage or cancel your subscription through your Google Play
          account settings.
        </p>
        <p>Pro benefits may include ad removal, higher usage limits, and push notifications.</p>
      </Section>

      <Section title="Advertising">
        <p>
          The free version of the App displays third-party advertisements through Google
          AdMob. Ad content and data collection by ad partners are governed by their own
          policies. We are not responsible for the content of third-party ads or
          external sites linked from ads.
        </p>
      </Section>

      <Section title="Acceptable Use">
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the App for unlawful, deceptive, or harmful purposes</li>
          <li>Attempt to access another user&apos;s account or data without permission</li>
          <li>Interfere with or disrupt the App, servers, or networks</li>
          <li>Reverse engineer or circumvent security, usage limits, or billing systems</li>
          <li>Upload malware, spam, or content that infringes others&apos; rights</li>
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
          We do not warrant that the App will be uninterrupted, error-free, or that
          balances and calculations will always be accurate.
        </p>
      </Section>

      <Section title="Limitation of Liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY
          LOSS OF DATA, PROFITS, OR GOODWILL, ARISING FROM YOUR USE OF THE APP OR
          RELIANCE ON EXPENSE OR BALANCE INFORMATION DISPLAYED IN THE APP.
        </p>
        <p>
          Our total liability for any claim relating to the App shall not exceed the
          greater of (a) the amount you paid us in the twelve months before the claim,
          or (b) one hundred Indian rupees (₹100).
        </p>
      </Section>

      <Section title="Intellectual Property">
        <p>
          The App, including its code, design, branding, and content (excluding
          third-party components), is owned by us or our licensors and protected by
          intellectual property laws. These Terms do not grant you any ownership rights
          in the App.
        </p>
      </Section>

      <Section title="Termination">
        <p>
          You may stop using the App at any time by signing out or uninstalling it. We
          may suspend or terminate your access if you violate these Terms or if
          continued access would harm the service or other users.
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
