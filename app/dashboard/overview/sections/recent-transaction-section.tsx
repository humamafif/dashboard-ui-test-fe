import { OverviewSectionLayout } from "../components/overview-section-layout";
import RecentTransaction from "../components/recent-transaction";

export function RecentTransactionSection() {
  return (
    <OverviewSectionLayout title="Recent Transaction">
      <div className="flex h-58.75 flex-col justify-between rounded-[25px] bg-white p-6.25">
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
