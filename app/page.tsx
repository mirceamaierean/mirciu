import { Info } from "@/components";
import Image from "next/image";
import mirciu from "@/public/images/mirciu.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="m-auto">
          <h1 className="text-5xl font-bold"> Hi there! I&apos;m Mirciu! </h1>
          <Info />
        </div>
        <div className="mx-auto w-[25rem]">
          <Image src={mirciu} alt="mirciu" />
        </div>
      </div>
    </>
  );
}
