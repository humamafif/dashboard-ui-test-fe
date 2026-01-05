import React from "react";

type ChartItem = {
  label: string;
  bar1: string;
  bar2: string;
};

const BAR_CANVAS_HEIGHT = "h-[166px] lg:h-[186px]";

const BarChart: React.FC = () => {
  const data: ChartItem[] = [
    { label: "Sat", bar1: "h-[96%]", bar2: "h-[49%]" },
    { label: "Sun", bar1: "h-[70%]", bar2: "h-[26%]" },
    { label: "Mon", bar1: "h-[66%]", bar2: "h-[53%]" },
    { label: "Tue", bar1: "h-[96%]", bar2: "h-[74%]" },
    { label: "Wed", bar1: "h-[31%]", bar2: "h-[49%]" },
    { label: "Thu", bar1: "h-[78%]", bar2: "h-[49%]" },
    { label: "Fri", bar1: "h-[79%]", bar2: "h-[68%]" },
  ];

  const gridLabels = [500, 400, 300, 200, 100, 0];

  return (
    <div className="w-full">
      {/* CHART GRID LAYOUT */}
      <div className="grid grid-cols-[48px_1fr]">
        {/* Y AXIS */}
        <div className={`flex flex-col justify-between ${BAR_CANVAS_HEIGHT}`}>
          {gridLabels.map((tick) => (
            <span
              key={tick}
              className="text-[13px] font-normal text-(--color-text-secondary)"
            >
              {tick}
            </span>
          ))}
        </div>

        {/* CHART AREA */}
        <div className="flex flex-col">
          {/* GRID LINES */}
          <div className={`flex flex-col justify-between ${BAR_CANVAS_HEIGHT}`}>
            {gridLabels.map((_, i) => (
              <div
                key={i}
                className="border-t border-(--color-chart-divider)"
              />
            ))}
          </div>

          {/* BARS */}
          <div
            className={`-mt-[166px] lg:-mt-[186px] flex items-end justify-between gap-[48px] pl-[25px] pr-[24px] ${BAR_CANVAS_HEIGHT}`}
          >
            {data.map((item) => (
              <div
                key={item.label}
                className="flex h-full items-end justify-center "
              >
                <div className="flex h-full items-end gap-[12px]">
                  <div
                    className={`w-[15px] rounded-full bg-[#1e1bff] ${item.bar1}`}
                  />
                  <div
                    className={`w-[15px]  rounded-full bg-[#1de9b6] ${item.bar2}`}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* X AXIS */}
          <div className="mt-4 flex  pl-[36px] pr-[37px] gap-[65px]">
            {data.map((item) => (
              <span
                key={item.label}
                className="text-center text-[13px] font-normal text-(--color-text-secondary)"
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
