import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Image from "next/image";

export const metadata = {
    title: "Projects",
    description:
      "Selected software projects involving healthcare monitoring, embedded user interfaces, and real-time data systems.",

    openGraph: {
        title: "Projects | Krishna Kumar",
        description:
            "Selected software projects involving healthcare monitoring, embedded user interfaces, and real-time data systems.",
        type: "profile",
        locale: "en_IN",
        siteName: "Krishna Kumar",
    },
};
  

export default function Projects() {
  return (
    <>
      <PageHeader title="Projects" />

        <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-3">

            {/* Hero */}
            <section className="max-w-3xl">
            <p className="mt-1 text-lg text-neutral-600 leading-relaxed">
                I build software that lives in the real world — powering hospitals,
                startups, and fast-moving teams.  
                These are selected projects that reflect my focus on
                <span className="font-medium text-neutral-800"> reliability, performance, and product thinking.</span>
            </p>
            </section>

            {/* Projects Grid */}
            <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Project 1 */}
            <ProjectCard
                title="Patient Monitor UI Platform"
                description="A real-time medical device interface built using LVGL and C++, powering ICU-grade patient monitoring systems. Designed for extreme performance, memory safety, and 24/7 uptime."
                tech="C++, LVGL, Embedded Linux"
                tag="Healthcare · Embedded"
            />

            {/* Project 2 */}
            <ProjectCard
                title="Remote Device Telemetry & Cloud Sync"
                description="A cloud-connected system that streams medical device data to AWS and GCP, enabling live monitoring, analytics, and remote diagnostics across hospitals."
                tech="Node.js, Django, AWS, GCP, Kafka"
                tag="Cloud · Healthcare"
            />

            {/* Project 3 */}
            <ProjectCard
                title="Allo Health Growth Platform"
                description="Built the full growth stack from scratch — landing pages, analytics, ad tracking, and conversion pipelines that scaled a healthcare startup from zero to thousands of users."
                tech="Next.js, TypeScript, Webflow, Google Ads, GA, GTM"
                tag="Growth · SaaS"
            />

            {/* Project 4 */}
            <ProjectCard
                title="Cross-platform Mobile Apps"
                description="High-performance mobile applications used by patients and clinicians, built with React Native and backed by real-time APIs."
                tech="React Native, Node.js, REST, WebSockets"
                tag="Mobile · Product"
            />

            {/* Project 5 */}
            <ProjectCard
                title="IKIGAI APPLICATIONS"
                description="A stealth multi-product software studio building focused tools for modern teams. Each product solves one painful workflow and scales into a standalone SaaS."
                tech="Next.js, Node.js, AI, Automation"
                tag="Startup · Stealth"
            />

            {/* Project 6 */}
            <ProjectCard
                title="High-Performance Data Pipelines"
                description="Real-time ingestion, buffering, and processing of medical telemetry and business data using low-latency architectures."
                tech="C++, Kafka, Redis, PostgreSQL"
                tag="Infra · Performance"
            />

            </section>

        </div>
        </main>
    </>
  );
}

function ProjectCard({
    title,
    description,
    tech,
    tag,
    }: {
    title: string;
    description: string;
    tech: string;
    tag: string;
    }) {
        return (
            <div className="group relative rounded-2xl border border-neutral-200 p-8 transition hover:shadow-lg hover:border-neutral-300">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                    {tag}
                    </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-neutral-900">
                    {title}
                </h3>

                <p className="mt-4 text-neutral-600 leading-relaxed">
                    {description}
                </p>

                <p className="mt-6 text-sm text-neutral-500">
                    <span className="font-medium text-neutral-700">Tech:</span> {tech}
                </p>
            </div>
        );
    }
  