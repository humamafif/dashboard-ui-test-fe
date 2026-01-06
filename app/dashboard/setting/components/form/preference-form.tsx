import ButtonSaveSetting from "../button-save-setting";
import InputSetting from "../input-setting";
import ToggleSwitch from "../toggle-switch";

export default function PreferenceForm() {
  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 lg:gap-y-6">
        <InputSetting label="Currency" placeholder="USD" />
        <InputSetting
          label="Time Zone"
          placeholder="(GMT-12:00) International Date Line West"
        />
      </div>

      {/*  Notification */}
      <div className="flex flex-col gap-[13px] lg:gap-[17px] xl:gap-[19px]">
        <h3 className="text-[14px] xl:text-[17px] font-medium text-text-heading-secondary">
          Notification
        </h3>
        <div className="flex flex-col gap-[18px] lg:gap-[15px]">
          <ToggleSwitch
            label="I send or receive digital currency"
            defaultChecked={true}
          />
          <ToggleSwitch
            label="I receive merchant order"
            defaultChecked={false}
          />
          <ToggleSwitch
            label="There are recommendation for my account"
            defaultChecked={true}
          />
        </div>
      </div>

      {/* Button Save */}
      <ButtonSaveSetting />
    </div>
  );
}
