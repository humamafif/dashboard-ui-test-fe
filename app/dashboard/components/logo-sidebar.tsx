import Image from "next/image";

export default function LogoSidebar() {
  return (
    <div className="flex xl:ml-9.5 ml-6.75 items-center w-fit ">
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
