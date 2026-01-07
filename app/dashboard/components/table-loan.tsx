import { loansData } from "@/app/constants/loans-data";
import React from "react";

const ActiveLoansTable: React.FC = () => {
  const format = (val: number) => `$${val.toLocaleString()}`;
  return (
    <div className="w-full">
      <h2 className="text-[#343C6A] lg:text-[16px] text-[18px] xl:text-[22px] font-semibold xl:mb-[15px] lg:mb-[16px] mb-[12px] xl:mt-[24px] lg:mt-[20px] mt-[22px]">
        Active Loans Overview
      </h2>

      <div className="bg-white py-[17px] px-[20px] lg:py-[22px] lg:px-[20px] xl:py-[20px] xl:px-[30px] rounded-[15px] lg:rounded-[20px] xl:rounded-[25px]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-(--color-border-divider-table) text-(--color-text-table-header) text-[12px] xl:text-[16px] font-medium">
              <th className="hidden lg:table-cell pb-4 text-left w-20">
                SL No
              </th>
              <th className="pb-4 text-left">Loan Money</th>
              <th className="pb-4 text-left">Left to repay</th>
              <th className="hidden lg:table-cell pb-4 text-left">Duration</th>
              <th className="hidden lg:table-cell pb-4 text-left">
                Interest rate
              </th>
              <th className="hidden lg:table-cell pb-4 text-left">
                Installment
              </th>
              <th className="pb-4 text-center w-20">Repay</th>
            </tr>
          </thead>

          <tbody className="text-(--color-text-table-body) text-[12px] xl:text-[16px]">
            {loansData.map((item, idx) => (
              <tr
                key={idx}
                className="border-b border-(--color-border-divider-table) last:border-none"
              >
                <td className="hidden lg:table-cell py-4 xl:py-5 whitespace-nowrap w-12">
                  {item.slNo}
                </td>
                <td className="py-4 xl:py-5">{format(item.loanMoney)}</td>
                <td className="py-4 xl:py-5">{format(item.leftToRepay)}</td>
                <td className="hidden lg:table-cell py-4 xl:py-5">
                  {item.duration}
                </td>
                <td className="hidden lg:table-cell py-4 xl:py-5">
                  {item.interestRate}
                </td>
                <td className="hidden lg:table-cell py-4 xl:py-5">
                  {format(item.installment)} / month
                </td>
                <td className="py-4 xl:py-5">
                  <div className="flex justify-end">
                    <button className="border hover:border-(--color-btn-primary-border) hover:text-(--color-btn-primary-border) rounded-full transition-all border-text-body text-text-body w-[70px] h-[25px] lg:w-[80px] lg:h-[30px] xl:w-[100px] xl:h-[35px] flex items-center justify-center cursor-pointer">
                      Repay
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            <tr className="font-semibold text-(--color-text-table-total)">
              <td className="hidden lg:table-cell pt-6">Total</td>
              <td className="pt-6">
                <span className="lg:hidden block text-[12px] font-medium">
                  Total
                </span>
                {format(1250000)}
              </td>
              <td className="pt-10 lg:pt-6">{format(750000)}</td>
              <td className="hidden lg:table-cell pt-6" />
              <td className="hidden lg:table-cell pt-6" />
              <td className="hidden lg:table-cell pt-6">
                {format(50000)} / month
              </td>
              <td className="pt-6" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveLoansTable;
