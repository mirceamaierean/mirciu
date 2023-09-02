"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Footer = () => {
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ThemeSwitcher />
      </ThemeProvider>
    </div>
  );
};
