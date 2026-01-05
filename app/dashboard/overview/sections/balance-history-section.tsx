import { OverviewSectionLayout } from "../components/overview-section-layout";
import BalanceHistoryChart from "../components/line-chart";

export function BalanceHistorySection() {
  return (
    <OverviewSectionLayout title="Balance History" className="col-span-3">
      <div className="h-69 rounded-[25px] bg-white flex flex-col justify-between px-[25px] py-[35px]">
        <BalanceHistoryChart />
      </div>
    </OverviewSectionLayout>
  );
}
