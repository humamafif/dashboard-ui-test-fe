import { WeeklyActivitySection } from "./sections/weekly-activity-section";
import { RecentTransactionSection } from "./sections/recent-transaction-section";
import { MyCardsSection } from "./sections/my-cards-section";
import { ExpenseStatisticsSection } from "./sections/expense-statistics-section";
import { QuickTransferSection } from "./sections/quick-transfer-section";
import BalanceHistoryChart from "./components/line-chart";
import { BalanceHistorySection } from "./sections/balance-history-section";

export default function OverviewPage() {
  return (
    <main className="py-6 px-10 gap-y-6 flex flex-col">
      <div className="grid grid-cols-3 gap-x-7.5 gap-y-6">
        <MyCardsSection />
        <RecentTransactionSection />
        <WeeklyActivitySection />
        <ExpenseStatisticsSection />
      </div>
      <div className="grid grid-cols-5 gap-7.5">
        <QuickTransferSection />
        <BalanceHistorySection />
      </div>
    </main>
  );
}
