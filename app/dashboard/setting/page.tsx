import SettingSection from "./components/setting-section";

export default function SettingPage() {
  return (
    <main className=" px-[25px] py-[25px]  xl:px-10 xl:py-[31px] gap-y-6 flex flex-col">
      <div className="rounded-[15px] lg:rounded-[20px] xl:rounded-[25px] h-full w-full bg-white px-[20px] lg:px-[25px] xl:px-[30px] pt-[22px] lg:pt-[25px] xl:pt-[37px]">
        <SettingSection />
      </div>
    </main>
  );
}
