import { ChevronDownIcon } from "@/app/components/icons/chevron-down-icon";
import { PencilIcon } from "@/app/components/icons/pencil-icon";
import Input from "@/app/components/input";
import ProfileCircle from "@/app/components/profile-circle";
import React from "react";
import InputSetting from "../input-setting";
import ButtonSaveSetting from "../button-save-setting";

const ProfileForm = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-[22px] lg:gap-[53px] xl:gap-[42px]">
        {/* Foto Profil */}
        <div className="shrink-0 flex justify-center lg:block">
          <div className="relative size-[170px] lg:size-[110px] xl:size-[130px] items-center justify-center">
            <ProfileCircle path="/assets/img/profile.jpg" alt="Profile" />
            <button className="absolute xl:bottom-4 lg:bottom-3 bottom-5 -right-1 btn-primary p-[10px] lg:p-[7px] rounded-full shadow-md cursor-pointer">
              <PencilIcon className="size-[18px] xl:size-[15px] lg:size-[12px]" />
            </button>
          </div>
        </div>

        {/* Grid Input Form */}
        <div className="grow grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[26px] xl:gap-[39px] gap-y-[16px] lg:gap-y-[16px] xl:gap-y-[22px]">
          <InputSetting label="Your Name" placeholder="Charlene Reed" />
          <InputSetting label="User Name" placeholder="Charlene Reed" />
          <InputSetting
            label="Email"
            placeholder="charlenereed@gmail.com"
            type="email"
          />
          <InputSetting
            label="Password"
            placeholder="**********"
            type="password"
          />
          <InputSetting
            label="Date of Birth"
            placeholder="25 January 1990"
            type="date"
            isSelect={true}
          />
          <InputSetting
            label="Present Address"
            placeholder="San Jose, California, USA"
          />
          <InputSetting
            label="Permanent Address"
            placeholder="San Jose, California, USA"
          />
          <InputSetting label="City" placeholder="San Jose" />
          <InputSetting label="Postal Code" placeholder="45962" />
          <InputSetting label="Country" placeholder="USA" />
        </div>
      </div>
      <ButtonSaveSetting />
    </>
  );
};

export default ProfileForm;
