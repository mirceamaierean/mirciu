import Link from "next/link";
import { Circle } from "@/components/Circle";
import Image from "next/image";
import lost from "../public/images/lost.gif";

export default function NotFound() {
  return (
    <div className="flex flex-col mx-auto items-center mt-32 sm:mt-4">
      <Image src={lost} alt="Lost" width={300} height={300} />
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h1 className="text-3xl font-bold my-4">404 - Page Not Found</h1>
        <p className="mx-auto">You&apos;ve stumbled upon a rarity!</p>
        <Link href="/">
          <div className="scale-75 mx-auto flex justify-center">
            <Circle
              textContent="Return to homepage"
              rotationAngle={90}
              translateX={-10}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
