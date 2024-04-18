import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/root_layout/navbar/Navbar";
import ChatSection from "@/components/shared/chat_section/ChatSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <div className="flex gap-8">
          <div className="w-full lg:w-20 fixed lg:static bottom-0">
            <Navbar />
          </div>
          <div className="w-[90%] mx-auto lg:w-[15%] h-[50%]">{children}</div>
          <div className=" hidden lg:block w-[75%]">
            <ChatSection />
          </div>
        </div>
      </body>
    </html>
  );
}
