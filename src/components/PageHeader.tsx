import Link from "next/link";
import Icon from "./Icon";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  icon: string;
  breadcrumb: string;
  tintClass?: string;
  children?: React.ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  icon,
  breadcrumb,
  tintClass = "bg-bg-soft",
  children,
}: PageHeaderProps) {
  return (
    <section className={`relative overflow-hidden ${tintClass} py-16 px-6`}>
      {/* Watermark icon */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
        <Icon name={icon} size={200} />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-text-muted mb-4">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Icon name="chevronRight" size={14} />
          <span className="text-text-main font-medium">{breadcrumb}</span>
        </nav>

        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
            <Icon name={icon} size={28} />
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold">
            {title}
          </h1>
        </div>

        <p className="text-text-muted max-w-2xl leading-relaxed">{subtitle}</p>

        {children}
      </div>
    </section>
  );
}
