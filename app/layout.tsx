import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";

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
      <body className="dark:bg-[#1f2028] relative">
        <Navbar />
          <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
