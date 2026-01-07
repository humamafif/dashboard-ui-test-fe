"use client";
import { useState } from "react";
import { CreditCard } from "../components/credit-card";
import { OverviewSectionLayout } from "../components/overview-section-layout";

export function MyCardsSection() {
  const [activeCardId, setActiveCardId] = useState<string | null>("card-1");
  return (
    <OverviewSectionLayout
      title="My Cards"
      className="col-span-2"
      actionLabel="See All"
    >
      <div className="flex xl:h-58.75 h-[170px] xl:gap-7.5 lg:gap-[25px] gap-5 overflow-x-auto  -mx-6 px-6 lg:mx-0 lg:px-0 lg:overflow-visible lg:justify-between lg:flex-nowrap [scrollbar-width:none]">
        <CreditCard
          id="card-1"
          balance="$5,756"
          cardHolder="Eddy Cusuma"
          validThru="12/22"
          cardNumber="3778 **** **** 1234"
          isActive={activeCardId === "card-1"}
          onClick={setActiveCardId}
        />

        <CreditCard
          id="card-2"
          balance="$3,210"
          cardHolder="Humam Afif"
          validThru="11/25"
          cardNumber="5123 **** **** 8890"
          isActive={activeCardId === "card-2"}
          onClick={setActiveCardId}
        />
      </div>
    </OverviewSectionLayout>
  );
}
