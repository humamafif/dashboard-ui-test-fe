"use client";
import { useState } from "react";
import { CreditCard } from "../components/credit-card";
import { OverviewSectionLayout } from "../components/overview-section-layout";

export function MyCardsSection() {
  const [activeCardId, setActiveCardId] = useState<string | null>("card-1");
  return (
    <OverviewSectionLayout title="My Cards" className="col-span-2">
      <div className="flex h-58.75 justify-between gap-7.5">
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
