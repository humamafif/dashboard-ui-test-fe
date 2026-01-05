import { DashboardIcon } from "@/app/components/icons/dashboard-icon";
import { TransactionIcon } from "@/app/components/icons/transaction-icon";
import { AccountIcon } from "@/app/components/icons/account-icon";
import { InvestmentIcon } from "@/app/components/icons/invesment-icon";
import { CreditCardIcon } from "@/app/components/icons/credit-card-icon";
import { LoanIcon } from "@/app/components/icons/loan-icon";
import { ServiceIcon } from "@/app/components/icons/service-icon";
import { MyPrivilegeIcon } from "@/app/components/icons/my-privilege-icon";
import { SettingFillIcon } from "@/app/components/icons/setting-fill-icon";

export const MENUS = [
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
