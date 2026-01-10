import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="mb-6 md:mb-12 border-b border-gray-200 dark:border-gray-800 pb-4 flex justify-between items-center">
      <ul className="flex gap-1 md:gap-6 text-sm">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/experience">Experience</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      <ThemeToggle />
    </nav>
  );
}
