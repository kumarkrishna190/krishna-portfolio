export default function PageHeader({
    title,
    subtitle,
  }: {
    title: string;
    subtitle?: string;
  }) {
    return (
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
      </header>
    );
  }
  