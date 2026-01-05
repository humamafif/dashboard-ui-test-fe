export function ChartLegend() {
  return (
    <div className="flex items-center gap-7.5">
      <div className="flex items-center ">
        <span className="xl:size-3.75 size-[12px]  rounded-full bg-[#16DBCC] mr-2.5" />
        <span className="xl:text-[15px] lg:text-[13px] text-[12px] font-normal text-(--color-text-secondary)">
          Deposit
        </span>
      </div>
      <div className="flex items-center ">
        <span className="xl:size-3.75 size-[12px] rounded-full bg-[#FF82AC] mr-2.5" />
        <span className="xl:text-[15px] lg:text-[13px] text-[12px] font-normal text-(--color-text-secondary)">
          Withdraw
        </span>
      </div>
    </div>
  );
}
