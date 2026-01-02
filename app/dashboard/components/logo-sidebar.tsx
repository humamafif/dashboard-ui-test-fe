import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex ml-6.75 items-center w-full">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={36}
        height={36}
        className="mr-2.25"
      />
      <h1 className="font-logo text-[25px] text-text-heading-primary">
        Bankku.
      </h1>
    </div>
  );
}
