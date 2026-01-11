import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Image from "next/image";

export const metadata = {
  title: "About",
  description:
    "Background and professional focus of Krishna Kumar, a software engineer working across healthcare, compliance, and embedded systems.",

    openGraph: {
      title: "About | Krishna Kumar",
      description:
        "Background and professional focus of Krishna Kumar, a software engineer working across healthcare, compliance, and embedded systems.",
      type: "profile",
      locale: "en_IN",
      siteName: "Krishna Kumar",
    },
};


export default function About() {
  return (
    <>
        <PageHeader
        title="About"
        subtitle="Krishna Kumar : Software Engineer and Product Designer"
        />
        <div className="relative w-full h-72 br-50 rounded-2xl overflow-hidden">
        <Image
            src="/images/code.jpg"
            alt="Code"
            width={1200}
            height={500}
            className="rounded mb-8"
        />
        </div>
        <br /> <br />
        <Section title="Overview">
            <p>
            <b>Krishna Kumar</b> is an Indian software engineer and <em>technology entrepreneur </em> 
            known for his work in healthcare software systems, embedded user interfaces, 
            and real-time data processing applications. He is the founder of <b>IKIGAI APPLICATIONS</b>, 
            a software venture focused on building specialized applications and tools for data-intensive tracking 
            and health related use cases.
            </p>
            </Section>
            <hr />
            <br /> <br />
            <Section title="Early Life">
            <h1 className="text-3xl font-bold mb-2">Early life and education</h1>
            <p className="text-gray-600 text-lg">1st July, 1996 - present</p>
            </Section>

            <Section title="Background">
            <p>
            <b>Krishna Kumar</b> was born in a small town in <b>Sonebhadra</b> district of Uttar Pradesh, India. 
            He persued his early education in local schools before moving to a boarding school named <b>Sunbeam English School, Bhagwanpur </b> 
            secured highest marks multi media in board exams.
            Later pursued formal education in engineering and developed from <b>SMVIT (VTU)</b> situated in Bengaluru, Karnataka. 
            With an early interest in software systems, particularly low-level programming, embedded interfaces, and performance-critical applications,
            he honed his skills through various projects and internships during his academic years.
            He also participated in multiple sports activities during his college like basketball, handball, chess and many more.
            Graduated with a Bachelor's degree, laying a strong foundation for his future endeavors in the tech industry.
            </p>
        </Section>

        <hr />
        <br /> <br />

        <Section title="Positions Held">
        <h1 className="text-3xl font-bold mb-2">Work Life</h1>
        <a href="https://www.noccarc.com" target="_blank"><h1 className="text-3xl font-bold mb-2 underline">Noccarc Robotics</h1></a>
        <p className="text-gray-600 text-lg">Software Engineer II | 2023 – Present</p>
      
        <p>
          <b>Tech: C++, LVGL, React.js, React Native, Django, Node.js, Java, AWS, GCP</b> <br />
          Noccarc Robotics builds advanced and smart critical care devices HQ based in Pune (India). 
          At Noccarc Robotics, I work on building mission-critical medical device software across embedded, web, and cloud platforms. 
          My role spans from low-level device UI development to cloud-connected healthcare systems.

          <b>I contribute to:</b>

          Developing real-time medical device UIs using LVGL and C++

          Building cross-platform clinician and patient dashboards in React & React Native

          Designing and implementing backend services in Django, Node.js, and Java

          Integrating device telemetry, data pipelines, and cloud infrastructure on AWS and GCP

          Working on high-reliability systems where performance, memory safety, and stability are critical

          This role bridges embedded systems, full-stack development, and healthcare engineering, giving me hands-on ownership of complex, production-grade systems.
        </p>
      </Section>

      <Section title="Allo Health">
      <a href="https://www.allohealth.com" target="_blank"><h1 className="text-3xl font-bold mb-2 underline">Allo Health</h1></a>
        <p className="text-gray-600 text-lg">Founding Software Engineer | 2021 – 2023</p>
      
        <p>
          <b>Tech: Webflow, Next.js, Node.js, TypeScript, Google Ads, GTM, GA, Facebook Ads</b> <br />
          Allo Health is a sexual wellness platform founded by Pranay Jivrajka (OLA co-founder) HQ based in Bengaluru.
          I was an early engineering hire and founding team member, helping build Allo Health from the ground up — 
          both the product and its growth infrastructure.

          I led and contributed to:

          Building the core web application using Next.js & TypeScript

          Developing backend services in Node.js
          <br /><br />
          Creating and maintaining marketing websites using Webflow

          Setting up and managing growth & analytics pipelines:
          <ul className="font-bold">
            <br />
            <li>Google Ads</li>
            <br />
            <li>Google Tag Manager</li>
            <br />
            <li>Google Analytics</li>
            <br />
            <li>Facebook Ads</li>
            <br />
            <li>Implementing conversion tracking, funnels, and attribution systems</li>
            <br />
            <li>Optimizing landing pages and campaigns for high-conversion healthcare marketing</li>
            <br />
          </ul>
          This role combined engineering, product, and growth, giving me end-to-end ownership of both code and business outcomes.
        </p>
      </Section>

      <Section title="Noya And Unibook">
        <h1 className="text-3xl font-bold mb-2">Noya And Unibook</h1>
        <p className="text-gray-600 text-lg">Lead Software Engineer | 2020 – 2021</p>
      
        <p>
          <b>Tech: React.js, React Native, Node.js</b> <br />
          Noya is a fast fashion platform and Unibook is a payment tracking and management tool.
          As a Lead Engineer, I was responsible for architecting and delivering the entire product stack across web and mobile.

          I worked on:

          Designing scalable frontend architecture in React.js

          Building mobile applications in React Native

          Developing backend APIs in Node.js

          Managing and mentoring developers

          Owning feature delivery, performance, and reliability

          This role sharpened my ability to ship fast without sacrificing quality, while leading teams and technical direction.
        </p>
      </Section>

      <Section title="Turbo Comply">
      <a href="https://www.turbocomply.com" target="_blank"><h1 className="text-3xl font-bold mb-2 underline">Turbo Comply</h1></a>
        <p className="text-gray-600 text-lg">Software Engineer (Consultant) | 2020 – 2021</p>
      
        <p>
          <b>Tech: React.js, TypeScript, Ant design</b> <br />
          Turbo Comply is a compliance management SaaS platform.
          I worked as a consultant on compliance-driven SaaS applications, focusing on frontend architecture and usability.

          Responsibilities included:

          Building complex UI workflows in React.js

          Using TypeScript for safer and more maintainable code

          Improving form-heavy and compliance-driven interfaces

          Working closely with product teams to deliver reliable enterprise features
        </p>
      </Section>

      <Section title="Sporthood">
      <a href="https://www.sporthood.in" target="_blank"><h1 className="text-3xl font-bold mb-2 underline">Sporthood</h1></a>
        <p className="text-gray-600 text-lg">Software Engineer | 2019 – 2020</p>
      
        <p>
          <b>Tech: React.js, React Native, Django</b> <br />
          Sporthood is a sports and community platform. Which provides users with a seamless experience 
          to connect, engage, and participate in various sports and get trained with experienced coaches.
          This was my early professional role, where I worked on a sports and community platform.

          I contributed to:

          Developing web applications using React.js

          Building mobile apps with React Native

          Creating backend services using Django

          Integrating APIs and managing user data

          This role gave me strong foundations in full-stack product development.
        </p>
      </Section>

      <Section title="Founded IKIGAI APPLICATIONS">
        <h1 id="ikigai" className="text-3xl font-bold mb-2 underline">Founded IKIGAI APPLICATIONS</h1>
        <p className="text-gray-600 text-lg italic">“Building focused software that quietly powers the world’s most important work.”</p>
      
            <b>IKIGAI APPLICATIONS</b> is a product-driven technology studio building a new generation of high-leverage software tools for founders, creators, and modern businesses.

            We focus on identifying deep workflow pain points — places where people lose time, money, or clarity — and turning them into simple, elegant, and scalable products.
            <br /><br /><br />
            <b>Our philosophy is inspired by Ikigai:</b>
            <br />

            Building products that sit at the intersection of what people need, what they love to use, and what creates real economic value.

            Rather than betting on a single product, <b>IKIGAI</b> is structured as a multi-product company, where each application is designed to:
            <br />
            <br />
            <ul>
              <li>Solve one specific, painfli problem</li>
              <br />
              <li>Be highly focused and easy to adopt</li>
              <br />
              <li>Scale into a standalone, profitable SaaS</li>
            </ul>
            <br /><br />
            <b>We build across:</b>
            <br /><br />
            <ul>
              <li>Web & Mobile platforms</li>
              <br />
              <li>Developer tools</li>
              <br />
              <li>AI-powered workflows</li>
              <br />
              <li>Business automation & analytics</li>
              <br />
              <li>Healthcare and operations software</li>
            </ul>
            <br /><br />
            IKIGAI APPLICATIONS operates in stealth mode, with multiple products under development and early users already validating our approach.

            Our long-term vision is to create a portfolio of compounding software businesses — each small, powerful, and deeply loved by its users — rather than a single bloated platform.
      </Section>
    </>
  );
}
