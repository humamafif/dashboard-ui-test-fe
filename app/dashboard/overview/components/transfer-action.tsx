import { SendIcon } from "@/app/components/icons/send-icon";

export default function TransferAction() {
  return (
    <div className="flex items-center gap-5 text-[12px] xl:text-[16px] font-normal text-(--color-text-secondary)">
      <p className="whitespace-nowrap">Write Amount</p>
      <div className="flex w-full justify-between rounded-full h-[40px] xl:h-[50px] bg-[#EDF1F7]">
        <input
          type="text"
          defaultValue="525.50"
          className="bg-transparent border-none outline-none focus:ring-0 w-full py-auto flex xl:pl-[30px] pl-[15px] text-[15px] xl:text-[19px]"
        />

        <button className="btn-primary rounded-full w-fit py-[12px] px-[21px] xl:py-[14px] xl:px-[24px] text-[13px] xl:text-[16px] flex items-center justify-center gap-[9px] font-medium shrink-0">
          Send
          <SendIcon className="h-[14px] xl:h-[22px]" />
        </button>
      </div>
    </div>
  );
}
