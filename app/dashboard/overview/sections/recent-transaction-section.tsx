import { OverviewSectionLayout } from "../components/overview-section-layout";
import RecentTransaction from "../components/recent-transaction";

export function RecentTransactionSection() {
  return (
    <OverviewSectionLayout title="Recent Transaction">
      <div className="flex xl:h-58.75 lg:h-[170px] h-[214px] flex-col justify-between rounded-[25px] bg-white xl:p-6.25 lg:p-[15px] py-[20px] px-[18px]">
        <RecentTransaction
          typeTransaction="card"
          date="28 January 2021"
          amount={-850}
        />
        <RecentTransaction
          typeTransaction="paypal"
          date="25 January 2021"
          amount={2500}
        />
        <RecentTransaction
          typeTransaction="friend"
          date="21 January 2021"
          amount={5400}
        />
      </div>
    </OverviewSectionLayout>
  );
}
