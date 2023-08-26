import Link from "next/link";
import React from "react";

export default function Blog() {
  return (
    <>
      <Link href="/">
        <p className="text-white font-matter">Back Home from Blog</p>
      </Link>
    </>
  );
}
