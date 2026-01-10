export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      {title && (
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          {title}
        </h2>
      )}
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}
