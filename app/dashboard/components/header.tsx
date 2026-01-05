import IconCircle from "@/app/components/icon-circle";
import { NotificationIcon } from "@/app/components/icons/notification-icon";
import { SearchIcon } from "@/app/components/icons/search-icon";
import { SettingOutlineIcon } from "@/app/components/icons/setting-outline-icon";
import Input from "@/app/components/input";
import ProfileCircle from "@/app/components/profile-circle";

export default function Header() {
  return (
    <header className="h-25 pr-7.5 pl-6.25 bg-(--color-bg-header) border-b border-(--color-border-primary) flex items-center justify-between">
      <h1 className="font-semibold text-text-heading-primary text-[28px]">
        Overview
      </h1>
      <div className="flex gap-7.5 items-center">
        {/* input */}
        <Input
          colorIcon="gray"
          variant="filled"
          icon={SearchIcon}
          placeholder="Search for something..."
          type="text"
        />

        {/* icon button */}
        <IconCircle
          colorIcon="gray"
          colorBg="gray"
          icon={SettingOutlineIcon}
          className="size-12.5"
        />
        <IconCircle
          colorIcon="red"
          colorBg="gray"
          icon={NotificationIcon}
          className="size-12.5"
        />

        {/* profile */}
        <ProfileCircle
          path="/assets/img/profile.jpg"
          alt="profile"
          className="size-15 ml-1.25"
        />
      </div>
    </header>
  );
}
