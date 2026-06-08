import Link from "next/link";

type LegalPage = "privacy" | "terms";

export default function AppLegalNav({
  basePath,
  current,
}: {
  basePath: string;
  current: LegalPage;
}) {
  const linkClass = (page: LegalPage) =>
    page === current
      ? "font-semibold underline"
      : "underline text-gray-600 dark:text-gray-400";

  return (
    <nav className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm border-b border-gray-200 dark:border-gray-800 pb-4">
      <Link href="/apps" className="text-gray-600 dark:text-gray-400 hover:underline">
        ← Apps
      </Link>
      <span className="hidden sm:inline text-gray-300 dark:text-gray-600">·</span>
      <Link href={`${basePath}/privacy`} className={linkClass("privacy")}>
        Privacy Policy
      </Link>
      <Link href={`${basePath}/terms`} className={linkClass("terms")}>
        Terms & Conditions
      </Link>
    </nav>
  );
}
