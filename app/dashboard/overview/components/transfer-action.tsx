import { SendIcon } from "@/app/components/icons/send-icon";

export default function TransferAction() {
  return (
    <div className="flex items-center gap-5 text-[16px] font-normal text-(--color-text-secondary)">
      <p className="whitespace-nowrap">Write Amount</p>
      <div className="flex w-full justify-between rounded-full h-[50px] bg-[#EDF1F7]">
        <input
          type="text"
          defaultValue="525.50"
          className="bg-transparent border-none outline-none focus:ring-0 w-full py-auto flex px-[30px] text-inherit font-inherit"
        />

        <button className="btn-primary rounded-full w-fit py-[14px] px-[24px] flex items-center justify-center gap-[9px] font-medium shrink-0">
          Send
          <SendIcon className="h-[22px]" />
        </button>
      </div>
    </div>
  );
}
