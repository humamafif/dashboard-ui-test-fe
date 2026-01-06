import React from "react";

interface TabBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ["Edit Profile", "Preferences", "Security"];

  return (
    <div className="flex justify-between gap-0 lg:justify-start lg:gap-[45px] xl:gap-[57px] border-b border-[#F4F5F7] mb-[25px] lg:mb-[41px] xl:mb-[52px]">
      {tabs.map((tab) => (
        <div
          key={tab}
          className="relative w-[80px] xl:w-[114px] lg:w-[94px] flex flex-col items-center"
        >
          <button
            onClick={() => setActiveTab(tab)}
            className={`text-[13px] lg:text-[12px] xl:text-[15px] font-medium transition-all whitespace-nowrap pb-[7px] lg:pb-[9px] xl:pb-[8px] ${
              activeTab === tab
                ? "text-[#1814F3]"
                : "text-[#718EBF] hover:text-slate-600"
            }`}
          >
            {tab}
          </button>

          {activeTab === tab && (
            <div className="absolute bottom-0 left-0 right-0 lg:h-[3px] h-[2px] bg-[#1814F3] rounded-t-[10px]" />
          )}
        </div>
      ))}
    </div>
  );
};

export default TabBar;
