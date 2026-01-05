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
      className={`relative overflow-hidden rounded-full aspect-square flex items-center justify-center ${className}`}
    >
      <Image
        src={path}
        alt={alt}
        width={500}
        height={500}
        // object-cover sangat penting agar gambar tidak gepeng saat dipotong bulat
        className="object-cover w-full h-full"
      />
    </div>
  );
}
