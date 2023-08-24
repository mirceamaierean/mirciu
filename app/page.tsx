import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/about">
        <p className="text-white">About</p>
      </Link>
    </>
  );
}
