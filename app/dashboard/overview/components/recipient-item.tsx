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
      <ProfileCircle
        alt={alt}
        path={path}
        className="xl:size-[70px] size-[50px] mb-[12px] xl:mb-[15px]"
      />
      <p className="text-text-body xl:text-[16px] text-[12px]">{name}</p>
      <p className="text-(--color-text-secondary) xl:text-[15px] text-[12px] ">
        {role}
      </p>
    </div>
  );
}
