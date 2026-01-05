import { ChartLegend } from "../components/chart-legend";
import { OverviewSectionLayout } from "../components/overview-section-layout";
import BarChart from "../components/bar-chart";

export function WeeklyActivitySection() {
  return (
    <OverviewSectionLayout title="Weekly Activity" className="col-span-2">
      <div className="xl:h-80.5 lg:h-[261px] h-[254px] rounded-[25px] py-[17px] xl:py-[28px] xl:px-[30px] px-[18px] lg:px-[22px] bg-white flex flex-col justify-between">
        <div className="flex justify-end">
          <ChartLegend />
        </div>
        <BarChart />
      </div>
    </OverviewSectionLayout>
  );
}
