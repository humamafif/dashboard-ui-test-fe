import { ChevronRightIcon } from "@/app/components/icons/chevron-right-icon";
import ProfileCircle from "@/app/components/profile-circle";
import RecipientItem, { RecipientItemProps } from "./recipient-item";

const recipients: RecipientItemProps[] = [
  {
    path: "/assets/img/recipients/recipient-1.png",
    alt: "recipient 1",
    name: "Livia Bator",
    role: "CEO",
  },
  {
    path: "/assets/img/recipients/recipient-2.png",
    alt: "recipient 2",
    name: "Randy Press",
    role: "Director",
  },
  {
    path: "/assets/img/recipients/recipient-3.png",
    alt: "recipient 3",
    name: "Workman",
    role: "Designer",
  },
];

export default function RecipientList() {
  return (
    <div className="w-full h-[127px] flex justify-between items-center">
      {recipients.map((recipient, index) => (
        <RecipientItem
          key={index}
          path={recipient.path}
          alt={recipient.alt}
          name={recipient.name}
          role={recipient.role}
        />
      ))}
      <button className="size-[40px] xl:size-[50px] bg-white rounded-full flex items-center justify-center shadow-[4px_4px_18px_-2px_rgba(231,228,232,0.8)]">
        <ChevronRightIcon className="h-[13px] xl:h-[22px] text-transparent" />
      </button>
    </div>
  );
}
