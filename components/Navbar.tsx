import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-20 py-9 lg:py-12 w-full flex flex-row justify-between">
      <div>
        <Link href="/">
          <h1 className="block group dark:text-white underlined whitespace-nowrap font-semibold text-3xl">
            Mirciu
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black dark:bg-white"></span>
          </h1>
        </Link>
      </div>
      <div className="flex flex-row w-1/5 justify-between my-auto">
        <Link href="/about">
          <h1 className="block group text-neutral-600 dark:text-gray-300 underlined font-medium text-xl hover:text-black dark:hover:text-white">
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black dark:bg-white"></span>
          </h1>
        </Link>
        <Link href="/blog">
          <h1 className="block group text-neutral-600 dark:text-gray-300 underlined font-medium text-xl hover:text-black dark:hover:text-white">
            Blog
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black dark:bg-white"></span>
          </h1>
        </Link>
        <Link
          href={process.env.NEXT_PUBLIC_RESUME_URL as string}
          target="_blank"
        >
          <h1 className="block group text-neutral-600 dark:text-gray-300 underlined font-medium text-xl hover:text-black dark:hover:text-white">
            Resume
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black dark:bg-white"></span>
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
