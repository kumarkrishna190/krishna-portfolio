import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

export const metadata = {
  title: {
    default: "Krishna Kumar | Software Engineer",
    template: "%s | Krishna Kumar",
  },
  description:
    "Krishna Kumar is a software engineer working on healthcare software, embedded systems, and full-stack web and mobile applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <main className="max-w-4xl mx-auto px-4 py-10">
            <Navbar />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
