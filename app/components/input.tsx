import React from "react";
type InputVariant = "filled" | "outline";
interface InputProps {
  className?: string;
  variant: InputVariant;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  colorIcon: IconColor;
  placeholder: string;
  type: "text" | "password" | "email" | "search";
}

const variantStyles: Record<InputVariant, string> = {
  filled: "bg-(--color-input-bg-filled) text-(--color-input-text-filled)",
  outline:
    "bg-(--color-input-bg-outline) text-(--color-input-text-outline) border border-slate-200",
};

const iconColorStyles: Record<IconColor, string> = {
  blue: "text-(--color-icon-blue)",
  gray: "text-(--color-icon-gray)",
  yellow: "text-(--color-icon-yellow)",
  pink: "text-(--color-icon-pink)",
  red: "text-(--color-icon-red)",
  green: "text-(--color-icon-green)",
  white: "text-(--color-icon-white)",
};

export default function Input({
  className = "",
  variant,
  icon: Icon,
  colorIcon,
  ...props
}: InputProps) {
  const containerClass = variantStyles[variant] || "";
  const iconClass = iconColorStyles[colorIcon as IconColor] || "";

  return (
    <div
      className={`h-12.5 w-63.75 bg-(--color-input-bg-${variant}) rounded-full flex items-center px-6.25 ${containerClass} ${className}`}
    >
      <Icon className={`size-4 shrink-0 ${iconClass}`} />

      <input
        {...props}
        className="ml-3.75 w-full bg-transparent outline-none text-[15px]"
      />
    </div>
  );
}
