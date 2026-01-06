import ButtonSaveSetting from "../button-save-setting";
import InputSetting from "../input-setting";
import ToggleSwitch from "../toggle-switch";

export default function SecurityForm() {
  return (
    <div className="flex flex-col gap-[20px] xl:gap-[27px]">
      <div className="flex flex-col gap-[12px] xl:gap-[19px] lg:gap-[16px]">
        <h3 className="text-[14px] xl:text-[17px] font-medium text-[#333B69]">
          Two-factor Authentication
        </h3>
        <ToggleSwitch
          label="Enable or disable two factor authentication"
          defaultChecked={true}
        />
      </div>

      <div className="flex flex-col gap-[14px] xl:gap-[16px]">
        <h3 className="text-[14px] xl:text-[17px] font-medium text-[#333B69]">
          Change Password
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[29px] xl:gap-[39px] gap-y-[16px] lg:gap-y-[14px] xl:gap-y-[22px]">
          <InputSetting
            label="Current Password"
            placeholder="**********"
            type="password"
          />
          <div className="hidden lg:block" />{" "}
          <InputSetting
            label="New Password"
            placeholder="**********"
            type="password"
          />
        </div>
      </div>
      <ButtonSaveSetting />
    </div>
  );
}
