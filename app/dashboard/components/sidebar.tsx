"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { DashboardIcon } from "@/app/components/icons/dashboard-icon";
import { TransactionIcon } from "@/app/components/icons/transaction-icon";
import { AccountIcon } from "@/app/components/icons/account-icon";
import { InvestmentIcon } from "@/app/components/icons/invesment-icon";
import { CreditCardIcon } from "@/app/components/icons/credit-card-icon";
import { LoanIcon } from "@/app/components/icons/loan-icon";
import { ServiceIcon } from "@/app/components/icons/service-icon";
import { MyPrivilegeIcon } from "@/app/components/icons/my-privilege-icon";
import { SettingFillIcon } from "@/app/components/icons/setting-fill-icon";
import LogoSidebar from "./logo-sidebar";

export default function Sidebar() {
  const pathname = usePathname();

  const menus = [
    {
      id: "overview",
      label: "Dashboard",
      href: "/dashboard/overview",
      icon: DashboardIcon,
    },
    {
      id: "transactions",
      label: "Transactions",
      href: "/dashboard/transactions",
      icon: TransactionIcon,
    },
    {
      id: "accounts",
      label: "Accounts",
      href: "/dashboard/accounts",
      icon: AccountIcon,
    },
    {
      id: "investments",
      label: "Investments",
      href: "/dashboard/investments",
      icon: InvestmentIcon,
    },
    {
      id: "credit-cards",
      label: "Credit Cards",
      href: "/dashboard/credit-cards",
      icon: CreditCardIcon,
    },
    { id: "loans", label: "Loans", href: "/dashboard/loans", icon: LoanIcon },
    {
      id: "services",
      label: "Services",
      href: "/dashboard/services",
      icon: ServiceIcon,
    },
    {
      id: "my-privileges",
      label: "My Privileges",
      href: "/dashboard/my-privileges",
      icon: MyPrivilegeIcon,
    },
    {
      id: "setting",
      label: "Setting",
      href: "/dashboard/setting",
      icon: SettingFillIcon,
    },
  ];

  return (
    <div className="bg-(--color-bg-sidebar) h-full pt-8.5 min-w-62.5 border-r border-(--color-border-primary) hidden md:block">
      <LogoSidebar />

      <nav className="mt-12 flex flex-col gap-1">
        {menus.map((menu) => {
          const isActive = pathname.startsWith(menu.href);
          const Icon = menu.icon;

          return (
            <Link
              key={menu.id}
              href={menu.href}
              className={`relative flex items-center py-4 pl-11
                ${
                  isActive
                    ? "text-(--color-text-nav-active)"
                    : "text-(--color-text-nav-default) hover:bg-slate-50"
                }`}
            >
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-(--color-text-nav-active) rounded-r-full" />
              )}

              <Icon className="w-6 h-6 mr-5" />
              <span className="font-medium text-lg">{menu.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
