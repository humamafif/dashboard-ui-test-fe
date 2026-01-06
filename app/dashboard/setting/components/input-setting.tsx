import { ChevronDownIcon } from "@/app/components/icons/chevron-down-icon";
import Input from "@/app/components/input";

interface InputSettingProps {
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password" | "date";
  isSelect?: boolean;
}

const InputSetting: React.FC<InputSettingProps> = ({
  label,
  placeholder,
  type = "text",
  isSelect = false,
}) => (
  <div className="flex flex-col gap-[9px] lg:gap-[7px] xl:gap-[11px]">
    <label className="text-[13px] xl:text-[16px] font-normal text-text-body">
      {label}
    </label>
    <div className="relative">
      <Input
        variant="outline"
        type={type}
        placeholder={placeholder}
        placeholderColor="text-[#718EBF]"
        className={`w-full h-[40px] xl:h-[50px] px-[15px] xl:px-[20px] rounded-[10px] lg:rounded-[15px] border text-[12px] xl:text-[15px] 
          ${type === "date" ? "uppercase text-[#718EBF]" : ""}`}
      />

      {type === "date" && (
        <ChevronDownIcon className="xl:w-[12px] w-[10px] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
      )}
    </div>
  </div>
);

export default InputSetting;
