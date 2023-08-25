import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/about">
        <p className="text-white font-matter font-thin">About</p>
      </Link>
    </>
  );
}
