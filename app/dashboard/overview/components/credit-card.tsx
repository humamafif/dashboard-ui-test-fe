import { EmvChipImage } from "../../../components/emv-chip-image";
import { MasterCardIcon } from "../../../components/icons/master-card-icon";

interface CreditCardProps {
  id: string;
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

export function CreditCard({
  id,
  balance,
  cardHolder,
  validThru,
  cardNumber,
  isActive,
  onClick,
}: CreditCardProps) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={() => onClick(id)}
      className={`relative rounded-[25px] shrink-0 lg:shrink w-[265px] xl:w-full h-full xl:pt-6 pt-4.25 xl:pb-5 pb-[16px] xl:pr-6 px-5 xl:pl-6.5 flex flex-col justify-between font-lato hover:cursor-pointer items-start
        ${
          isActive
            ? "bg-card-gradient"
            : "bg-bg-card-default border border-(--color-border-secondary)"
        }
      `}
    >
      {/* Header */}
      <div className="flex w-full justify-between">
        <div className="flex flex-col justify-center items-start">
          <p
            className={`font-normal xl:text-[12px] text-[11px]  ${
              isActive ? "text-white" : "text-(--color-text-secondary)"
            }`}
          >
            Balance
          </p>
          <p
            className={`font-semibold xl:text-[20px] text-[16px] ${
              isActive ? "text-white" : "text-heading-primary"
            }`}
          >
            {balance}
          </p>
        </div>
        <EmvChipImage
          className={`xl:size-8.5 size-7.25 ${
            isActive ? "text-white" : "text-body"
          }`}
          aria-hidden
        />
      </div>

      {/* Meta */}
      <div className="grid grid-cols-2 justify-between w-full">
        <div className="flex flex-col items-start">
          <p
            className={`uppercase text-[10px] xl:text-[12px] font-normal ${
              isActive
                ? "text-white opacity-70"
                : "text-(--color-text-secondary)"
            }`}
          >
            Card Holder
          </p>
          <p
            className={`text-[13px] xl:text-[15px] font-semibold ${
              isActive ? "text-white" : "text-heading-primary"
            }`}
          >
            {cardHolder}
          </p>
        </div>
        <div className="flex flex-col items-start">
          <p
            className={`uppercase text-[10px] xl:text-[12px] font-normal ${
              isActive
                ? "text-white opacity-70"
                : "text-(--color-text-secondary)"
            }`}
          >
            Valid THRU
          </p>
          <p
            className={`text-[13px] xl:text-[15px] font-semibold ${
              isActive ? "text-white" : "text-heading-primary"
            }`}
          >
            {validThru}
          </p>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`absolute bottom-0 left-0 xl:h-17.5 h-[51px] w-full  rounded-b-[25px] pointer-events-none 
            ${
              isActive
                ? "border-none opacity-20 bg-linear-to-b from-white to-transparent"
                : "border-t border-(--color-border-secondary)"
            }`}
      />

      {/* Footer */}
      <div className="flex justify-between items-center w-full">
        <p
          className={`text-[15px] xl:text-[22px] font-semibold ${
            isActive ? "text-white" : "text-heading-primary"
          }`}
        >
          {cardNumber}
        </p>
        <MasterCardIcon
          className={`w-fit xl:h-7.5 h-[18px] ${
            isActive ? "text-white" : "text-[#9199af]"
          }`}
          aria-hidden
        />
      </div>
    </button>
  );
}
