import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export const metadata = {
  title: "Apps",
  description:
    "Mobile and web applications from IKIGAI APPLICATIONS, including PingMe.",
  openGraph: {
    title: "Apps | IKIGAI APPLICATIONS",
    description:
      "Mobile and web applications from IKIGAI APPLICATIONS, including PingMe.",
    type: "website",
    locale: "en_IN",
    siteName: "Krishna Kumar",
  },
};

const apps = [
  {
    name: "SettleUp",
    tagline: "Split bills with friends. Track group expenses and settle up.",
    description:
      "A shared expense tracker for Android. Create groups, log expenses, see who owes whom, record settlements, and get activity alerts with SettleUp Pro.",
    privacyHref: "/apps/settleup/privacy",
    termsHref: "/apps/settleup/terms",
  },
  {
    name: "PingMe",
    tagline: "One number. Any communication channel.",
    description:
      "A communication launcher for Android that lets you contact phone numbers through Call, SMS, WhatsApp, Telegram, Signal, and more — without saving contacts.",
    privacyHref: "/apps/pingme/privacy",
    termsHref: null,
  },
  {
    name: "2048",
    tagline: "Classic puzzle. Swipe, merge, beat your best score.",
    description:
      "A polished take on the classic 2048 tile puzzle for Android. Smooth animations, local high scores, haptic feedback, and ad-supported free gameplay.",
    privacyHref: "/apps/smart2048/privacy",
    termsHref: "/apps/smart2048/terms",
  },
];

export default function AppsPage() {
  return (
    <>
      <PageHeader
        title="Apps"
        subtitle="Products from IKIGAI APPLICATIONS"
      />

      <Section title="">
        <p>
          Focused software built at{" "}
          <Link href="/about#ikigai" className="underline font-medium">
            IKIGAI APPLICATIONS
          </Link>
          . Each app solves one specific workflow problem.
        </p>
      </Section>

      <ul className="space-y-8">
        {apps.map((app) => (
          <li
            key={app.name}
            className="rounded-xl border border-gray-200 dark:border-gray-800 p-6"
          >
            <h2 className="text-2xl font-bold">{app.name}</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">{app.tagline}</p>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {app.description}
            </p>
            <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
              <Link
                href={app.privacyHref}
                className="underline font-medium"
              >
                Privacy policy
              </Link>
              {app.termsHref && (
                <Link
                  href={app.termsHref}
                  className="underline font-medium"
                >
                  Terms & conditions
                </Link>
              )}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
