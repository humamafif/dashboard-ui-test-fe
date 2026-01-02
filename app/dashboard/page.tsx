import DashboardLayout from "./layout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <main className="py-6 px-10 grid grid-cols-3 gap-4">
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
