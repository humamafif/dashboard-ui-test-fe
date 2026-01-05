import { WeeklyActivitySection } from "./sections/weekly-activity-section";
import { RecentTransactionSection } from "./sections/recent-transaction-section";
import { MyCardsSection } from "./sections/my-cards-section";
import { ExpenseStatisticsSection } from "./sections/expense-statistics-section";
import { QuickTransferSection } from "./sections/quick-transfer-section";
import { BalanceHistorySection } from "./sections/balance-history-section";

export default function OverviewPage() {
  return (
    <main className="py-5 px-[25px] xl:px-10 xl:py-[24px] gap-y-6 flex flex-col bg-white lg:bg-[#F5F7FA]">
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-x-7.5 lg:gap-x-[25px] xl:gap-y-6 lg:gap-y-5 gap-y-[22px]">
        <MyCardsSection />
        <RecentTransactionSection />
        <WeeklyActivitySection />
        <ExpenseStatisticsSection />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-7.5 lg:gap-x-[25px] gap-y-5">
        <QuickTransferSection />
        <BalanceHistorySection />
      </div>
    </main>
  );
}
