export function ChartLegend() {
  return (
    <div className="flex items-center gap-7.5">
      <div className="flex items-center ">
        <span className="size-3.75 rounded-full bg-[#16DBCC] mr-2.5" />
        <span className="text-[15px] font-normal text-(--color-text-secondary)">
          Deposit
        </span>
      </div>
      <div className="flex items-center ">
        <span className="size-3.75 rounded-full bg-[#FF82AC] mr-2.5" />
        <span className="text-[15px] font-normal text-(--color-text-secondary)">
          Withdraw
        </span>
      </div>
    </div>
  );
}
