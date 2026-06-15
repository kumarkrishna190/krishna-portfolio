import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import AppLegalNav from "@/components/AppLegalNav";

const BASE_PATH = "/apps/sudokuelite";
const SUPPORT_EMAIL = "ikigai.applications@gmail.com";
const LAST_UPDATED = "June 15, 2026";

export const metadata = {
  title: "Sudoku Elite Terms & Conditions",
  description:
    "Terms and conditions for Sudoku Elite, a daily Sudoku puzzle app by IKIGAI APPLICATIONS.",
  openGraph: {
    title: "Sudoku Elite Terms & Conditions",
    description:
      "Terms and conditions for Sudoku Elite, a daily Sudoku puzzle app by IKIGAI APPLICATIONS.",
    type: "website",
    locale: "en_IN",
    siteName: "Krishna Kumar",
  },
};

export default function SudokuEliteTermsPage() {
  return (
    <>
      <PageHeader
        title="Sudoku Elite Terms & Conditions"
        subtitle={`Last updated: ${LAST_UPDATED}`}
      />

      <AppLegalNav basePath={BASE_PATH} current="terms" />

      <Section title="Agreement">
        <p>
          These Terms & Conditions (&quot;Terms&quot;) govern your use of the Sudoku Elite
          mobile application (the &quot;App&quot;) provided by IKIGAI APPLICATIONS
          (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
        </p>
        <p>
          By downloading, installing, or using the App, you agree to be bound by these
          Terms. If you do not agree, do not use the App.
        </p>
      </Section>

      <Section title="License">
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable license to
          use the App for personal, non-commercial entertainment purposes, subject to
          these Terms and applicable app store rules.
        </p>
        <p>
          You may not copy, modify, distribute, sell, reverse engineer, or create
          derivative works of the App except as permitted by law.
        </p>
      </Section>

      <Section title="Game Content">
        <p>
          Sudoku Elite provides generated Sudoku puzzles, daily challenges, practice
          mode, hints, streak tracking, and progress statistics.
        </p>
        <p>
          Game progress, stats, settings, and puzzle state are stored locally on your
          device and may be lost if you uninstall the App or clear its data.
        </p>
        <p>
          Hints are designed to teach solving logic. We do not guarantee that every
          puzzle can be completed using hints alone, or that hint suggestions will match
          your preferred solving style.
        </p>
      </Section>

      <Section title="Advertising">
        <p>
          The App is supported by advertising. Third-party ad networks may display banner
          and interstitial ads within the App. Your interaction with ads is subject to the
          ad provider&apos;s terms and policies.
        </p>
        <p>
          We are not responsible for the content of third-party advertisements or
          external websites linked from ads.
        </p>
      </Section>

      <Section title="Notifications">
        <p>
          You may optionally enable local daily reminder notifications. Notification
          delivery depends on your device settings and operating system behavior. We do
          not guarantee that reminders will always arrive at the exact scheduled time.
        </p>
      </Section>

      <Section title="Acceptable Use">
        <p>
          You agree not to misuse the App, including attempting to interfere with its
          operation, circumvent advertising systems, use automated tools to manipulate
          gameplay or stats, or use the App for any unlawful purpose.
        </p>
      </Section>

      <Section title="Disclaimer of Warranties">
        <p>
          THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY
          KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT.
        </p>
        <p>
          We do not warrant that the App will be uninterrupted, error-free, or free of
          harmful components.
        </p>
      </Section>

      <Section title="Limitation of Liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY
          LOSS OF DATA, PROFITS, OR GOODWILL, ARISING FROM YOUR USE OF THE APP.
        </p>
        <p>
          Our total liability for any claim relating to the App shall not exceed the
          amount you paid to use the App (which is zero for a free app).
        </p>
      </Section>

      <Section title="Intellectual Property">
        <p>
          The App, including its code, graphics, puzzle generation, and branding
          (excluding third-party components and the general Sudoku puzzle format), is
          owned by us or our licensors and protected by intellectual property laws.
        </p>
      </Section>

      <Section title="Termination">
        <p>
          We may suspend or terminate your access to the App at any time, with or
          without notice, for conduct that we believe violates these Terms or is harmful
          to other users or us.
        </p>
        <p>
          You may stop using the App at any time by uninstalling it from your device.
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
          These Terms shall be governed by applicable laws in your jurisdiction of
          residence, without regard to conflict of law principles, except where mandatory
          local consumer protection laws apply.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          For questions about these Terms, contact us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="underline">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </Section>
    </>
  );
}
