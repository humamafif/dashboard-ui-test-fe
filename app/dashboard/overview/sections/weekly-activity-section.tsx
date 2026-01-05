import { ChartLegend } from "../components/chart-legend";
import { OverviewSectionLayout } from "../components/overview-section-layout";
import BarChart from "../components/bar-chart";

export function WeeklyActivitySection() {
  return (
    <OverviewSectionLayout title="Weekly Activity" className="col-span-2">
      <div className="h-80.5 rounded-[25px] py-[28px] pl-[33px] pr-[30px] bg-white flex flex-col justify-between">
        <div className=" flex justify-end">
          <ChartLegend />
        </div>
        <BarChart />
      </div>
    </OverviewSectionLayout>
  );
}
