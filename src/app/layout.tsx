import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ProvideContext } from "./contexter";
import { Toaster } from "react-hot-toast";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        <ProvideContext>
          <div>
            <div className='z-50'><Toaster position="bottom-center"
              reverseOrder={false} /></div>
            <div className="container w-[100vw] ">
              {children}
            </div>
          </div>
        </ProvideContext>
      </body>
    </html>
  );
}
