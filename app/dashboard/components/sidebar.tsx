"use client";

import { useState } from "react";
import { DashboardIcon } from "@/app/components/icons/dashboard-icon";
import { TransactionIcon } from "@/app/components/icons/transaction-icon";
import { AccountIcon } from "@/app/components/icons/account-icon";
import { InvestmentIcon } from "@/app/components/icons/invesment-icon";
import { CreditCardIcon } from "@/app/components/icons/credit-card-icon";
import { LoanIcon } from "@/app/components/icons/loan-icon";
import { ServiceIcon } from "@/app/components/icons/service-icon";
import { MyPrivilegeIcon } from "@/app/components/icons/my-privilege-icon";
import LogoSidebar from "./logo-sidebar";
import { SettingFillIcon } from "@/app/components/icons/setting-fill-icon";

export default function Sidebar() {
  const menus = [
    { id: "dashboard", label: "Dashboard", icon: DashboardIcon },
    { id: "transaction", label: "Transactions", icon: TransactionIcon },
    { id: "account", label: "Accounts", icon: AccountIcon },
    { id: "investment", label: "Investments", icon: InvestmentIcon },
    { id: "credit-card", label: "Credit Cards", icon: CreditCardIcon },
    { id: "loan", label: "Loans", icon: LoanIcon },
    { id: "service", label: "Services", icon: ServiceIcon },
    { id: "my-privilege", label: "My Privileges", icon: MyPrivilegeIcon },
    { id: "setting", label: "Setting", icon: SettingFillIcon },
  ];

  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="bg-(--color-bg-sidebar) h-full pt-8.5 min-w-62.5 border-r border-(--color-border-primary) hidden md:block">
      <LogoSidebar />
      <div className="h-12"></div>

      <nav className="flex flex-col gap-1 ">
        {menus.map((menu) => {
          const isActive = activeMenu === menu.id;
          const Icon = menu.icon;

          return (
            <button
              key={menu.id}
              onClick={() => setActiveMenu(menu.id)}
              className={`relative flex items-center min-w-full py-4 pl-11 outline-none
                ${
                  isActive
                    ? "text-(--color-text-nav-active)"
                    : "text-(--color-text-nav-default) hover:bg-slate-50"
                }`}
            >
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-(--color-text-nav-active) rounded-r-full " />
              )}
              <div className="flex items-center ">
                <Icon
                  className={`w-6 h-6 mr-5 ${
                    isActive
                      ? "text-(--color-text-nav-active)"
                      : "text-(--color-text-nav-default)"
                  }`}
                />
                <span className="font-medium text-lg">{menu.label}</span>
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
