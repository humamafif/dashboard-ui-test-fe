import ActiveLoansTable from "../components/table-loan";
import ListLoanType from "./components/list-loan-type";

export default function LoansPage() {
  return (
    <main className="p-[25px] xl:px-10 xl:py-[31px] bg-[#F5F7FA]">
      {/* LOAN TYPE LIST */}
      <div className="flex h-[85] lg:h-[90px] xl:h-[120px] gap-[15px] lg:gap-[25px] xl:gap-[30px] overflow-x-auto ">
        {/* LOAN TYPE CARD */}
        <ListLoanType />
      </div>

      <ActiveLoansTable />
    </main>
  );
}
