import { HumbergerMenuIcon } from "@/app/components/icons/humberger-menu-icon";

export default function MenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="w-full h-full cursor-pointer" onClick={onClick}>
      <HumbergerMenuIcon className="text-text-heading-primary" />
    </button>
  );
}
