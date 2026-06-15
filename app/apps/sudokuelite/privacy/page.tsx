import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import AppLegalNav from "@/components/AppLegalNav";

const BASE_PATH = "/apps/sudokuelite";
const SUPPORT_EMAIL = "ikigai.applications@gmail.com";
const LAST_UPDATED = "June 15, 2026";

export const metadata = {
  title: "Sudoku Elite Privacy Policy",
  description:
    "Privacy policy for Sudoku Elite, a daily Sudoku puzzle app by IKIGAI APPLICATIONS.",
  openGraph: {
    title: "Sudoku Elite Privacy Policy",
    description:
      "Privacy policy for Sudoku Elite, a daily Sudoku puzzle app by IKIGAI APPLICATIONS.",
    type: "website",
    locale: "en_IN",
    siteName: "Krishna Kumar",
  },
};

export default function SudokuElitePrivacyPage() {
  return (
    <>
      <PageHeader
        title="Sudoku Elite Privacy Policy"
        subtitle={`Last updated: ${LAST_UPDATED}`}
      />

      <AppLegalNav basePath={BASE_PATH} current="privacy" />

      <Section title="Overview">
        <p>
          This Privacy Policy describes how IKIGAI APPLICATIONS (&quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;) collects, uses, and shares information when you use the Sudoku
          Elite mobile application (the &quot;App&quot;).
        </p>
        <p>
          Sudoku Elite is a daily Sudoku puzzle app with streak tracking, practice
          mode, smart hints, and progress stats. By using the App, you agree to the
          collection and use of information in accordance with this policy.
        </p>
      </Section>

      <Section title="Information We Collect">
        <p>
          The App is designed to minimize data collection. We do not require you to
          create an account.
        </p>
        <p>
          <strong>Locally stored data:</strong> Game progress, puzzle state, difficulty
          and display settings (such as dark mode, haptics, and font size), streak and
          completion statistics, best times, hint usage, and onboarding status are stored
          on your device using local storage. This data is not transmitted to our servers.
        </p>
        <p>
          <strong>Notifications:</strong> If you enable daily reminders, the App
          schedules local notifications on your device at the time and days you choose.
          Notification preferences are stored locally. We do not receive the content of
          these reminders on any server.
        </p>
        <p>
          <strong>Advertising data:</strong> The App displays advertisements provided
          by Google AdMob, including banner and interstitial ads. AdMob and its partners
          may collect device identifiers, IP address, ad interaction data, and similar
          information to deliver and measure ads. See{" "}
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
          We do not collect precise location data, contacts, photos, microphone audio,
          or other sensitive personal information through the App.
        </p>
      </Section>

      <Section title="How We Use Information">
        <p>
          Locally stored data is used solely to provide App functionality, such as
          saving your puzzle, tracking streaks, remembering settings, and showing your
          progress stats.
        </p>
        <p>
          Local notifications are used only to remind you to play, when you have opted
          in and granted permission on your device.
        </p>
        <p>
          Advertising partners use collected data to show relevant ads, prevent fraud,
          and measure ad performance.
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
          <li>
            Notifee — local notification scheduling on your device (
            <a
              href="https://notifee.app/privacy-policy"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              notifee.app/privacy-policy
            </a>
            )
          </li>
          <li>Google Play Services — as required by your Android device</li>
        </ul>
        <p>These services have their own privacy policies governing their use of your information.</p>
      </Section>

      <Section title="Data Retention">
        <p>
          Data stored locally on your device remains until you uninstall the App or
          clear the App&apos;s storage through your device settings.
        </p>
        <p>Advertising partners retain data according to their own policies.</p>
      </Section>

      <Section title="Children's Privacy">
        <p>
          The App is not directed at children under 13 years of age. We do not
          knowingly collect personal information from children under 13. If you believe
          a child has provided us with personal information, please contact us and we
          will take steps to delete such information.
        </p>
      </Section>

      <Section title="Your Rights and Choices">
        <p>
          You may disable notifications at any time through the App settings or your
          device settings.
        </p>
        <p>
          You may disable personalized advertising through your device settings (e.g.,
          &quot;Opt out of Ads Personalization&quot; on Android).
        </p>
        <p>
          You may reset local App data by clearing storage or reinstalling the App.
        </p>
        <p>
          Depending on your jurisdiction, you may have rights to access, correct, or
          delete personal data. Contact us using the email below to exercise these
          rights.
        </p>
      </Section>

      <Section title="Security">
        <p>
          We take reasonable measures to protect information processed by the App.
          However, no method of electronic storage or transmission is 100% secure.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will update the
          &quot;Last updated&quot; date at the top of this policy. Continued use of the
          App after changes constitutes acceptance of the updated policy.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          If you have questions about this Privacy Policy, contact us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="underline">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </Section>
    </>
  );
}
