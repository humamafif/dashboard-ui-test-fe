import IconCircle from "@/app/components/icon-circle";
import { formatAmount } from "@/app/utils/formatAmount";
import { ComponentType, SVGProps } from "react";

export type LoanTypeCardProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  colorIcon: IconColor;
  colorBg: BaseColor;
  amount: number | string;
  type: string;
};

export default function LoanTypeCard({
  icon,
  colorIcon,
  colorBg,
  amount,
  type,
}: LoanTypeCardProps) {
  const Icon = icon;
  return (
    <div className="h-full w-[230px] lg:w-[167px] xl:w-[255px] bg-white shrink-0 rounded-[15px] lg:rounded-[20px] xl:rounded-[25px] flex items-center pl-[43px] lg:pl-[16px] xl:pl-[27px] gap-[10px] lg:gap-[10px] xl:gap-[15px]">
      <IconCircle
        icon={Icon}
        colorIcon={colorIcon}
        colorBg={colorBg}
        className="xl:size-[70px] size-[45px]"
        iconClassName="xl:size-[30px] size-[20px] lg:size-[18px]"
      />
      <div>
        <p className="text-(--color-text-secondary) text-[12px] xl:text-[16px] lg:text-[11px] font-normal">
          {type}
        </p>
        <p
          className={`text-text-body font-semibold ${
            typeof amount === "number"
              ? "text-[16px] xl:text-[20px]"
              : "text-[13px] xl:text-[18px]"
          }`}
        >
          {typeof amount === "number" ? formatAmount(amount, false) : amount}
        </p>
      </div>
    </div>
  );
}
