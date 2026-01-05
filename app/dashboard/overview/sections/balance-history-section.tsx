import { OverviewSectionLayout } from "../components/overview-section-layout";
import BalanceHistoryChart from "../components/line-chart";

export function BalanceHistorySection() {
  return (
    <OverviewSectionLayout title="Balance History" className="col-span-4">
      <div className="xl:h-69 lg:h-[220px] h-[195px] rounded-[25px] bg-white flex flex-col justify-between px-[25px] py-[35px]">
        <BalanceHistoryChart />
      </div>
    </OverviewSectionLayout>
  );
}
