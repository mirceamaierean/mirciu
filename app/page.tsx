import { Info } from "@/components";
import Image from "next/image";
import mirciu from "@/public/images/mirciu.png";
import { Circle } from "@/components";

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-2 md:mt-24">
        <div className="m-auto">
          <h1 className="text-4xl sm:mt-3 font-bold">
            {" "}
            Hi there! I&apos;m Mircea!{" "}
          </h1>
          <Info />
          <Circle textContent="Learn more about me" translateY={10} />
        </div>
        <div className="mx-auto w-64 md:w-[25rem]">
          <Image src={mirciu} alt="mirciu" />
        </div>
      </div>
    </>
  );
}
