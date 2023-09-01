'use client';
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-2 sm:px-20 py-3 lg:py-12 w-full flex flex-row justify-between">
      <div>
        <Link href="/">
          <h1 className="block group dark:text-white underlined whitespace-nowrap font-semibold text-3xl">
            Mirciu
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black dark:bg-white"></span>
          </h1>
        </Link>
      </div>
      <div className="flex flex-col">
        <button
          className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          onClick={
            () => {
              document.getElementById("navbar")?.classList.toggle("hidden");
            }
          }

        >
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      <div className="my-auto hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar">
        <Link href="/about">
          <h1 className="px-5 block group text-neutral-600 dark:text-gray-300 underlined font-medium text-xl hover:text-black dark:hover:text-white">
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black dark:bg-white"></span>
          </h1>
        </Link>
        <Link href="/blog">
          <h1 className="px-5 block group text-neutral-600 dark:text-gray-300 underlined font-medium text-xl hover:text-black dark:hover:text-white">
            Blog
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black dark:bg-white"></span>
          </h1>
        </Link>
        <Link
          href={process.env.NEXT_PUBLIC_RESUME_URL as string}
          target="_blank"
        >
          <h1 className="px-5 block group text-neutral-600 dark:text-gray-300 underlined font-medium text-xl hover:text-black dark:hover:text-white">
            Resume
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black dark:bg-white"></span>
          </h1>
        </Link>
        </div>
        </div>

    </nav>
  );
};

export default Navbar;
