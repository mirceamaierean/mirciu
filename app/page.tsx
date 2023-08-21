import Link from "next/link";
import { Spotify } from "@/components";

export default function Home() {
  return (
    <>
      <Link href="/about">
        <p className="dark:text-white font-matter font-extrabold">About</p>
      </Link>
      <Spotify />
    </>
  );
}
