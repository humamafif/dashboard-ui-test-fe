"use client";
import { useState } from "react";
import { CreditCard } from "../components/credit-card";
import DashboardLayout from "./layout";

export default function DashboardPage() {
  const [activeCardId, setActiveCardId] = useState<string | null>("card-1");
  return (
    <DashboardLayout>
      <main className="py-6 px-10 grid grid-cols-3 gap-4">
        <section className="h-fit w-full col-span-2">
          <div className="flex justify-between items-center font-semibold text-text-heading-primary mb-5">
            <h2 className="text-[22px] ">My Cards</h2>
            <p className="text-[17px] ">See All</p>
          </div>
          <div className="flex justify-between gap-7.5">
            {/* card */}
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
        </section>
        <section className="h-52 w-full bg-amber-300">
          <div className="flex justify-between items-center font-semibold text-text-heading-primary mb-5">
            <h2 className="text-[22px] ">Recent Transaction</h2>
          </div>
        </section>
        <section className="h-52 w-full bg-amber-300 col-span-2">
          <h2 className="text-[18px] font-semibold text-text-heading-primary">
            My Cards
          </h2>
        </section>
        <section className="h-52 w-full bg-amber-300">
          <h2 className="text-[18px] font-semibold text-text-heading-primary">
            My Cards
          </h2>
        </section>
        <section className="h-52 w-full bg-amber-300">
          <h2 className="text-[18px] font-semibold text-text-heading-primary">
            My Cards
          </h2>
        </section>
        <section className="h-52 w-full bg-amber-300 col-span-2">
          <h2 className="text-[18px] font-semibold text-text-heading-primary">
            My Cards
          </h2>
        </section>
      </main>
    </DashboardLayout>
  );
}
