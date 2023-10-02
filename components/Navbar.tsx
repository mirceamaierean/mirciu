"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <nav
      className={`bg-white dark:bg-[#1f2028] fixed top-0 left-0 sm:static px-6 sm:px-20 py-6 sm:pt-16 w-full flex flex-col md:flex-row justify-between z-50`}
    >
      <div className="flex flex-row justify-between items-center">
        <Link href="/">
          <h1 className="block group dark:text-white underlined whitespace-nowrap font-semibold text-3xl">
            Mirciu
            <span className="block max-w-0 xl:group-hover:max-w-full transition-all duration-300 h-0.5 bg-black dark:bg-white"></span>
          </h1>
        </Link>
        <button
          className="block md:hidden border-2 p-3 rounded-xl scale-75"
          onClick={() => toggleOpen(!isOpen)}
        >
          <motion.nav animate={isOpen ? "open" : "closed"}>
            <motion.svg
              className="dark:text-white ml-[2.5px] mt-[2.5px]"
              width="23"
              height="23"
              viewBox="0 0 23 23"
            >
              <motion.path
                className="stroke-current"
                strokeWidth="3"
                fill="transparent"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
              />
              <motion.path
                className="stroke-current"
                strokeWidth="3"
                fill="transparent"
                strokeLinecap="round"
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <motion.path
                className="stroke-current"
                strokeWidth="3"
                fill="transparent"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
              />
            </motion.svg>
          </motion.nav>
        </button>
      </div>
      <div
        className={
          isOpen
            ? "transition ease-in-out flex flex-col md:flex-row w-full border-y-2 mt-2 py-2"
            : "hidden md:flex my-auto"
        }
      >

        {/* <Link href="/blog">
          <h1 className="block group pr-10 text-neutral-600 dark:text-gray-300 underlined font-medium text-xl xl:hover:text-black dark:xl:hover:text-white">
            Blog
            <span className="block max-w-0 xl:group-hover:max-w-full transition-all duration-300 h-0.5 bg-black dark:bg-white"></span>
          </h1>
        </Link> */}
        <Link
          href={process.env.NEXT_PUBLIC_RESUME_URL as string}
          target="_blank"
        >
          <h1 className="block group text-neutral-600 dark:text-gray-300 underlined font-medium text-xl xl:hover:text-black xl:dark:hover:text-white">
            Resume
            <span className="block max-w-0 xl:group-hover:max-w-full transition-all duration-300 h-0.5 bg-black dark:bg-white"></span>
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
