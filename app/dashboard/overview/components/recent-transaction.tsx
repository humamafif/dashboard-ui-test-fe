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
    <div className=" flex w-full items-center gap-4.25">
      {/* circle icon */}
      <div
        className={`aspect-square rounded-full size-13.75 bg-(--color-bg-icon-${transaction.backgroundIcon}) items-center justify-center flex`}
      >
        <transaction.icon
          className={`size-7 text-(--color-icon-${transaction.colorIcon})`}
        />
      </div>
      {/* data */}
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col">
          <p className="text-[16px] text-text-body font-medium">
            {transaction.description}
          </p>
          <p className="font-normal text-(--color-text-secondary) text-[15px]">
            {date}
          </p>
        </div>
        <p
          className={`font-medium text-[16px] ${
            amount < 0 ? "text-(--color-text-red)" : "text-(--color-text-green)"
          }`}
        >
          {formatAmount(amount)}
        </p>
      </div>
    </div>
  );
}
