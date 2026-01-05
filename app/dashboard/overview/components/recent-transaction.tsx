import { DepositCardIcon } from "@/app/components/icons/deposit-card-icon";
import { DepositPaypalIcon } from "@/app/components/icons/deposit-paypal-icon";
import { DepositFriendIcon } from "@/app/components/icons/deposit-paypal-icon copy";
import { formatAmount } from "@/app/utils/formatAmount";
type RecentTransactionProps = {
  date: string;
  amount: number;
  typeTransaction: "card" | "paypal" | "friend";
};

type TransactionType = RecentTransactionProps["typeTransaction"];

type Transaction = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  colorIcon: IconColor;
  backgroundIcon: BaseColor;
  description: string;
};

const TRANSACTION_MAP: Record<TransactionType, Transaction> = {
  card: {
    icon: DepositCardIcon,
    colorIcon: "yellow",
    backgroundIcon: "yellow",
    description: "Deposit from my Card",
  },
  paypal: {
    icon: DepositPaypalIcon,
    colorIcon: "blue",
    backgroundIcon: "blue",
    description: "Deposit Paypal",
  },
  friend: {
    icon: DepositFriendIcon,
    colorIcon: "green",
    backgroundIcon: "green",
    description: "Jemi Wilson",
  },
};

export default function RecentTransaction({
  date,
  amount,
  typeTransaction,
}: RecentTransactionProps) {
  const transaction = TRANSACTION_MAP[typeTransaction];

  return (
    <div className=" flex w-full items-center xl:gap-4.25 lg:gap-[8px] gap-[15px] ">
      {/* circle icon */}
      <div
        className={`aspect-square rounded-full xl:size-13.75 size-[50px] lg:size-[40px] bg-(--color-bg-icon-${transaction.backgroundIcon}) items-center justify-center flex`}
      >
        <transaction.icon
          className={`xl:size-7 size-[25px] lg:size-[20] text-(--color-icon-${transaction.colorIcon})`}
        />
      </div>
      {/* data */}
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col">
          <p className="xl:text-[16px] lg:text-[13px] text-[14px] text-text-body font-medium line-clamp-1">
            {transaction.description}
          </p>
          <p className="font-normal text-(--color-text-secondary) xl:text-[15px] text-[12px]">
            {date}
          </p>
        </div>
        <p
          className={`font-medium xl:text-[16px] text-[11px] ${
            amount < 0 ? "text-(--color-text-red)" : "text-(--color-text-green)"
          }`}
        >
          {formatAmount(amount, true)}
        </p>
      </div>
    </div>
  );
}
