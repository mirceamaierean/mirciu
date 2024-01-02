"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/mirceamaierean",
    icon: AiFillGithub,
    hoverColorClass: "hover:text-[#6e5494]",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mircea-maierean-591082254/",
    icon: FaLinkedinIn,
    hoverColorClass: "hover:text-[#0077b5]",
  },
];

export const Footer = () => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ThemeSwitcher />
      </ThemeProvider>
      <div className="my-7 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between">
        <span className="my-auto px-5 sm:px-16">
          Mirciu © {new Date().getFullYear()}. Website built using Next.js and
          Tailwind CSS {"("}
          <Link
            href="https://github.com/mirceamaierean/mirciu"
            className="underline"
          >
            view source code
          </Link>
          {")"}. All rights reserved.
        </span>
        <div className="flex flex-col p-5 sm:px-16">
          <p className="py-2">Let&apos;s connect!</p>
          <div className="flex flex-row gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <Link href={social.url} key={social.name}>
                  <Icon className={`text-3xl ${social.hoverColorClass}`} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
