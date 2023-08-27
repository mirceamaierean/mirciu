import { Spotify } from "@/components";
import { Info } from "@/components";
import Image from "next/image";
import mirciu from "@/public/images/mirciu.png";
import Typewriter from "typewriter-effect";

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
      {/* design this div as a button */}
      <div className="flex flex-row justify-center">
        <div className="flex flex-row justify-center mx-auto w-48 border-2 rounded-2xl hover:translate-x-6 hover:translate-y-6 ease-in-out duration-300">
          <a
            className="flex flex-row items-center"
            target="_blank"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            <h2 className="text-black dark:text-white mr-2 text-xl"> Click me! </h2>
          </a>
        </div>
      </div>
    </>
  );
}
