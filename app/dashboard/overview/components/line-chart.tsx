const BalanceHistoryChart = () => {
  // data points
  const data = [
    { label: "Jul", x: 0, y: 175 },
    { label: "Aug", x: 100, y: 135 },
    { label: "Sep", x: 200, y: 95 },
    { label: "Oct", x: 300, y: 15 },
    { label: "Nov", x: 400, y: 150 },
    { label: "Dec", x: 500, y: 95 },
    { label: "Jan", x: 600, y: 45 },
    { label: "", x: 700, y: 80 },
  ];

  // linepath
  const linePath = `
  M 0 175
  C 40 70, 70 120, 100 135
  C 155 165, 140 60, 200 85
  C 270 120, 260 10, 300 10
  C 340 10, 370 135, 400 145
  C 460 160, 430 45, 500 60
  C 550 75, 555 160, 600 135
  C 650 95, 620 20, 700 50
`;

  // areapath
  const areaPath = `${linePath} L 700 200 L 0 200 Z`;

  return (
    <div className="relative h-full w-full">
      {/* Y Axis */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[13px] text-[#718EBF] pr-4">
        <span>800</span>
        <span>600</span>
        <span>400</span>
        <span>200</span>
        <span>0</span>
      </div>

      <div className="ml-10 h-full relative">
        <svg
          viewBox="0 0 700 220"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* Horizontal grid */}
          {[0, 50, 100, 150, 200].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="700"
              y2={y}
              stroke="#DFE5EE"
              strokeDasharray="4 4"
              strokeWidth="1"
            />
          ))}

          {/* Vertical grid */}
          {data.map((d, i) => (
            <line
              key={i}
              x1={d.x}
              y1="0"
              x2={d.x}
              y2="200"
              stroke="#DFE5EE"
              strokeDasharray="4 4"
            />
          ))}

          {/* Gradient */}
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2D60FF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#2D60FF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area */}
          <path d={areaPath} fill="url(#chartGradient)" />

          {/* Line */}
          <path
            d={linePath}
            fill="none"
            stroke="#1814F3"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* X Axis */}
        <div className="absolute -bottom-2 left-0 w-full flex justify-between text-[14px] text-[#718EBF]">
          {data.map((d) => (
            <span key={d.label}>{d.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BalanceHistoryChart;
