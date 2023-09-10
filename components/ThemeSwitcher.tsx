"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="fixed bottom-5 right-5 text-black dark:text-white p-3 w-fit border-2 rounded-full border-black dark:border-white"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`w-8 text-black dark:text-white`}
        >
          <motion.path
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            className="stroke-current text-black dark:text-white"
            strokeWidth="1.5"
            fill="#eee"
            initial={{ pathLength: 1, opacity: 1 }}
            animate={
              theme === "light"
                ? { pathLength: 0, opacity: 0, translateY: 80 }
                : { pathLength: 1, opacity: 1 }
            }
            transition={{
              default: { duration: 1 },
            }}
          />
          <motion.path
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            className="stroke-current"
            fill="#eee"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              theme === "light"
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 0, opacity: 0, translateY: 80 }
            }
            transition={{
              default: { duration: 1 },
            }}
          />
        </motion.svg>
      </div>
    </button>
  );
};
