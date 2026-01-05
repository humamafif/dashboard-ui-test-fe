type OverviewSectionLayoutProps = {
  title: string;
  actionLabel?: string;
  onActionClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export function OverviewSectionLayout({
  title,
  actionLabel,
  onActionClick,
  children,
  className,
}: OverviewSectionLayoutProps) {
  return (
    <section className={`h-fit w-full ${className}`}>
      <div className="mb-5 flex items-center justify-between font-semibold text-text-heading-primary">
        <h2 className="text-[22px]">{title}</h2>

        {actionLabel && (
          <button type="button" onClick={onActionClick} className="text-[17px]">
            {actionLabel}
          </button>
        )}
      </div>
      {children}
    </section>
  );
}
