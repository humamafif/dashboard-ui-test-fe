import { AccountIcon } from "@/app/components/icons/account-icon";
import LoanTypeCard from "./loan-type-card";
import { LoanTypeCardProps } from "./loan-type-card";
import { CorporateIcon } from "@/app/components/icons/corporate-icon";
import { BusinessIcon } from "@/app/components/icons/business-icon";
import { CustomLoanIcon } from "@/app/components/icons/custom-loan-icon";

const loanTypeData: LoanTypeCardProps[] = [
  {
    type: "Personal Loans",
    amount: 50000,
    icon: AccountIcon,
    colorIcon: "blue",
    colorBg: "blue",
  },
  {
    type: "Corporate Loans",
    amount: 100000,
    icon: CorporateIcon,
    colorIcon: "yellow",
    colorBg: "yellow",
  },
  {
    type: "Business Loans",
    amount: 500000,
    icon: BusinessIcon,
    colorIcon: "pink",
    colorBg: "pink",
  },
  {
    type: "Custom Loans",
    amount: "Choose Money",
    icon: CustomLoanIcon,
    colorIcon: "green",
    colorBg: "green",
  },
];

export default function ListLoanType() {
  return (
    <div className="flex h-[85] lg:h-[90px] xl:h-[120px] gap-[15px] lg:gap-[25px] xl:gap-[30px] overflow-x-auto [scrollbar-width:none]">
      {/* LOAN TYPE CARD */}
      {loanTypeData.map((item) => (
        <LoanTypeCard
          key={item.type}
          type={item.type}
          amount={item.amount}
          icon={item.icon}
          colorIcon={item.colorIcon}
          colorBg={item.colorBg}
        />
      ))}
    </div>
  );
}
