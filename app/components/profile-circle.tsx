import Image from "next/image";

type ProfileCircleProps = {
  className?: string;
  path: string;
  alt: string;
};

export default function ProfileCircle({
  className,
  path,
  alt,
}: ProfileCircleProps) {
  return (
    <div
      className={`rounded-full relative overflow-hidden items-center aspect-square ${className}`}
    >
      <Image
        src={path}
        alt={alt}
        width={500}
        height={500}
        className="object-cover"
      />
    </div>
  );
}
