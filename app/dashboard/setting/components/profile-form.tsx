import { ChevronDownIcon } from "@/app/components/icons/chevron-down-icon";
import { PencilIcon } from "@/app/components/icons/pencil-icon";
import Input from "@/app/components/input";
import ProfileCircle from "@/app/components/profile-circle";
import React from "react";
interface InputProps {
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password" | "date";
  isSelect?: boolean;
}

const InputField: React.FC<InputProps> = ({
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

const ProfileForm = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-[22px] lg:gap-[53px] xl:gap-[42px]">
        {/* Foto Profil */}
        <div className="shrink-0 flex justify-center lg:block">
          <div className="relative size-[170px] lg:size-[110px] xl:size-[130px] items-center justify-center">
            <ProfileCircle path="/assets/img/profile.jpg" alt="Profile" />
            <button className="absolute xl:bottom-4 lg:bottom-3 bottom-5 -right-1 btn-primary p-[10px] lg:p-[7px] rounded-full shadow-md">
              <PencilIcon className="size-[18px] xl:size-[15px] lg:size-[12px]" />
            </button>
          </div>
        </div>

        {/* Grid Input Form */}
        <div className="grow grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[26px] xl:gap-[39px] gap-y-[16px] lg:gap-y-[16px] xl:gap-y-[22px]">
          <InputField label="Your Name" placeholder="Charlene Reed" />
          <InputField label="User Name" placeholder="Charlene Reed" />
          <InputField
            label="Email"
            placeholder="charlenereed@gmail.com"
            type="email"
          />
          <InputField
            label="Password"
            placeholder="**********"
            type="password"
          />
          <InputField
            label="Date of Birth"
            placeholder="25 January 1990"
            type="date"
            isSelect={true}
          />
          <InputField
            label="Present Address"
            placeholder="San Jose, California, USA"
          />
          <InputField
            label="Permanent Address"
            placeholder="San Jose, California, USA"
          />
          <InputField label="City" placeholder="San Jose" />
          <InputField label="Postal Code" placeholder="45962" />
          <InputField label="Country" placeholder="USA" />
        </div>
      </div>
      <div className="my-[20px] lg:my-[25px] xl:my-[30px] flex justify-center lg:justify-end">
        <button className="w-full xl:w-[190px] lg:w-[130px]  py-[11px] xl:py-[14px] bg-[#1814F3] text-white font-medium text-[15px] xl:text-[18px] rounded-[9px] xl:rounded-[15px] hover:opacity-95 transition-all">
          Save
        </button>
      </div>
    </>
  );
};

export default ProfileForm;
