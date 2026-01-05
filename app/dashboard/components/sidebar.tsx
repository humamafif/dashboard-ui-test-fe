"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import LogoSidebar from "./logo-sidebar";
import { MENUS } from "@/app/constants/menu";

type SidebarProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 transform bg-(--color-bg-sidebar) h-full pt-8.5 xl:w-62.5 w-[230px] border-r border-(--color-border-primary) transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 lg:block
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <LogoSidebar />

        <nav className="mt-12 flex flex-col gap-1">
          {MENUS.map((menu) => {
            const isActive = pathname.startsWith(menu.href);
            const Icon = menu.icon;
            return (
              <Link
                key={menu.id}
                href={menu.href}
                onClick={onClose}
                className={`relative flex items-center xl:py-4 py-[15px] xl:pl-11 pl-[30px] ${
                  isActive
                    ? "text-(--color-text-nav-active)"
                    : "text-(--color-text-nav-default) hover:bg-slate-50"
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 xl:w-1.5 w-[5px] bg-(--color-text-nav-active) rounded-r-full" />
                )}
                <Icon className="xl:size[25px] size-5 mr-5 xl:mr-6.5" />
                <span className="font-medium xl:text-lg text-base">
                  {menu.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
