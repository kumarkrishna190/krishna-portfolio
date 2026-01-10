import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-20">
      
      {/* Left */}
      <div className="md:col-span-4 text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4">Designer</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Product Designer specializing in user experience, interface design and design systems.
        </p>
      </div>

      {/* Center */}
      <div className="md:col-span-4 flex justify-center">
        <div className="relative w-72 h-72 br-50 rounded-2xl overflow-hidden">
          <Image
            src="/images/profile.png"
            alt="Krishna Kumar"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right */}
      <div className="md:col-span-4 text-center md:text-right">
        <h1 className="text-4xl font-mono font-bold mb-4">&lt;developer&gt;</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Embeded Systems Engineer, Web and mobile applications development with a focus on performance and scalability.
        </p>
      </div>

    </section>
  );
}
