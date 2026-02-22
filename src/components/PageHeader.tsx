import Link from "next/link";
import Icon from "./Icon";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  icon?: string;
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

      <div className="max-w-4xl mx-auto relative">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-text-muted mb-4">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Icon name="chevronRight" size={14} />
          <span className="text-text-main font-medium">{breadcrumb}</span>
        </nav>

        {/* Title */}
        <div className="mb-3">
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
