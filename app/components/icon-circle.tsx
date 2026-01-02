import React from "react";

interface IconCircleProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  colorIcon: IconColor;
  colorBg: BaseColor;
}

const bgIconVariants: Record<BaseColor, string> = {
  blue: "bg-(--color-bg-icon-blue)",
  gray: "bg-(--color-bg-icon-gray)",
  yellow: "bg-(--color-bg-icon-yellow)",
  pink: "bg-(--color-bg-icon-pink)",
  green: "bg-(--color-bg-icon-green)",
};

const iconVariants: Record<IconColor, string> = {
  blue: "text-(--color-icon-blue)",
  gray: "text-(--color-icon-gray)",
  yellow: "text-(--color-icon-yellow)",
  pink: "text-(--color-icon-pink)",
  red: "text-(--color-icon-red)",
  green: "text-(--color-icon-green)",
  white: "text-(--color-icon-white)",
};

export default function IconCircle({
  className = "",
  icon: Icon,
  colorIcon,
  colorBg,
}: IconCircleProps) {
  const bgClass = bgIconVariants[colorBg] || "";
  const iconClass = iconVariants[colorIcon] || "";

  return (
    <div
      className={`flex items-center justify-center rounded-full transition-colors ${bgClass} ${className}`}
    >
      <Icon className={`size-6.25 m-3 ${iconClass}`} />
    </div>
  );
}
