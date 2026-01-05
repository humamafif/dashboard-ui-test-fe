import { PieChartImage } from "@/app/components/pie-chart-image";
import { OverviewSectionLayout } from "../components/overview-section-layout";

export function ExpenseStatisticsSection() {
  return (
    <OverviewSectionLayout title="Expense Statistics">
      <div className="flex h-80.5 flex-col justify-between rounded-[25px] bg-white ">
        <PieChartImage className="w-full h-ful" />
      </div>
    </OverviewSectionLayout>
  );
}
