"use client";

import IconCircle from "@/app/components/icon-circle";
import { NotificationIcon } from "@/app/components/icons/notification-icon";
import { SearchIcon } from "@/app/components/icons/search-icon";
import { SettingOutlineIcon } from "@/app/components/icons/setting-outline-icon";
import Input from "@/app/components/input";
import ProfileCircle from "@/app/components/profile-circle";
import MenuButton from "./menu-button";
import { MENUS } from "@/app/constants/menu";
import { usePathname } from "next/navigation";

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname();
  const activeMenu = MENUS.find((menu) => pathname.startsWith(menu.href));
  const title = activeMenu ? activeMenu.id : "page not found";
  return (
    <header className="h-[140px] pt-6.25 pb-5 lg:py-0 xl:h-25 lg:h-[85px] pr-7.5 pl-6.25 xl:px-10 bg-(--color-bg-header) lg:border-b lg:border-(--color-border-primary) flex flex-wrap lg:flex-nowrap items-center justify-between gap-y-4">
      {/* MENU */}
      <div className="size-6 flex items-center justify-center lg:hidden">
        <MenuButton onClick={onMenuClick} />
      </div>

      <h1 className="font-semibold text-text-heading-primary xl:text-[28px] lg:text-[25px] text-[20px] order-1 capitalize">
        {title}
      </h1>

      <div className="order-2 lg:order-3">
        <ProfileCircle
          path="/assets/img/profile.jpg"
          alt="profile"
          className="xl:w-15 xl:h-15 lg:w-[50px] lg:h-[50px] w-[35px] h-[35px]"
        />
      </div>

      <div className="flex items-center w-full lg:w-auto order-3 lg:order-2 xl:gap-7.5 lg:gap-5 ml-auto lg:mr-7.5 xl:mr-10">
        <Input
          colorIcon="gray"
          variant="filled"
          icon={SearchIcon}
          placeholder="Search for something..."
          type="text"
          className="w-full"
        />

        {/* Settings & Notification */}
        <IconCircle
          colorIcon="gray"
          colorBg="gray"
          icon={SettingOutlineIcon}
          className="xl:size-12.5 lg:size-10 hidden lg:block"
          iconClassName="xl:size-6.25 size-4.5"
        />
        <IconCircle
          colorIcon="red"
          colorBg="gray"
          icon={NotificationIcon}
          className="xl:size-12.5 lg:size-10 hidden lg:block"
          iconClassName="xl:size-6.25 size-4.5"
        />
      </div>
    </header>
  );
}
