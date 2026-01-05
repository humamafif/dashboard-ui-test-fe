import ProfileCircle from "@/app/components/profile-circle";
export type RecipientItemProps = {
  path: string;
  alt: string;
  name: string;
  role: string;
};
export default function RecipientItem({
  path,
  alt,
  name,
  role,
}: RecipientItemProps) {
  return (
    <div className="flex flex-col items-center justify-center font-normal hover:font-extrabold">
      <ProfileCircle alt={alt} path={path} className="size-[70px] mb-[12px]" />
      <p className="text-text-body text-[16px]">{name}</p>
      <p className="text-(--color-text-secondary) text-[15px] ">{role}</p>
    </div>
  );
}
