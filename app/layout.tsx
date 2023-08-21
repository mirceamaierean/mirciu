import "./globals.css";
import type { Metadata } from "next";
import { Sidebar } from "@/components";

export const metadata: Metadata = {
  title: "Mirciu",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-zinc-950 flex flex-col md:flex-row justify-center mx-auto max-w-7xl">
        <Sidebar />
        <div className="rounded-3xl border-gray-800 border bg-stone-900 mt-10 mx-2 p-10 lg:w-[48rem] max-w-[48rem] h-[100rem]">
          {children}
        </div>
      </body>
    </html>
  );
}
