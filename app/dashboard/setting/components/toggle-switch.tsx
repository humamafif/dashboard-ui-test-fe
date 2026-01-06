export default function ToggleSwitch({
  label,
  defaultChecked,
}: {
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 lg:gap-4">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          className="sr-only peer"
        />
        <div className="w-[44px] xl:w-[56px] h-6 xl:h-[30px] bg-[#DFEAF2] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:shadow peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-[20px] after:w-[20px] xl:after:h-[26px] xl:after:w-[26px] after:transition-all peer-checked:bg-[#16DBCC]"></div>
      </label>
      <span className="text-[13px] xl:text-[16px] text-text-body font-normal">
        {label}
      </span>
    </div>
  );
}
