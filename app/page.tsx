import { Info } from "@/components/Info";
import Image from "next/image";
import mirciu from "@/public/images/mirciu.png";
import { Circle } from "@/components/Circle";
import { About } from "@/components/About";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between h-5/6 mt-32 sm:my-20 max-w-screen-xl	 mx-auto">
        <div className="m-auto">
          <h1 className="text-4xl font-bold"> Hi there! I&apos;m Mircea! </h1>
          <Info />
          <Link href="#about">
            <Circle textContent="Get to know me" translateY={10} />
          </Link>
        </div>
        <div className="mx-auto w-72 lg:w-[25rem] my-auto mb-4 sm:p-0">
          <Image src={mirciu} alt="mirciu" priority={true} />
        </div>
      </div>
      <About />
    </>
  );
}
