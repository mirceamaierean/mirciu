import { Info } from "@/components/Info";
import Image from "next/image";
import mirciu from "@/public/images/mirciu.png";
import { Circle } from "@/components/Circle";

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-24 sm:mt-36">
        <div className="m-auto">
          <h1 className="text-4xl sm:mt-3 font-bold">
            {" "}
            Hi there! I&apos;m Mircea!{" "}
          </h1>
          <Info />
          <Circle textContent="Learn more about me" translateY={10} />
        </div>
        <div className="mx-auto w-72 lg:w-[25rem] py-12">
          <Image src={mirciu} alt="mirciu" />
        </div>
      </div>
    </>
  );
}
