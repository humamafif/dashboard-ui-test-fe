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
      <div className="xl:mb-5 lg:mb-[16px] mb-[12px] flex items-center justify-between font-semibold text-text-heading-primary">
        <h2 className="xl:text-[22px] lg:text-[18px] text-[16px]">{title}</h2>

        {actionLabel && (
          <button
            type="button"
            onClick={onActionClick}
            className="xl:text-[17px] lg:text-[15px] text-[14px]"
          >
            {actionLabel}
          </button>
        )}
      </div>
      {children}
    </section>
  );
}
