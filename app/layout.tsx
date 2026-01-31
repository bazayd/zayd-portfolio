import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";



const Footer = () => {
  return (
    <footer className="mt-8 mb-5 px-2 sm:px-0">
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-600"></div>
        {/* <span className="flex-shrink mx-4 text-gray-400"></span> */}
        <div className="flex-grow border-t border-gray-600"></div>
      </div>
      <div className="font-mono flex flex-col gap-2 sm:flex-row sm:justify-between  items-center mx-auto">
        <a href="mailto:brandon.arriaga@sjsu.edu" className="hover:text-xl duration-300 ease-in-out"><h2 className="px-4 text-black">brandon.arriaga@sjsu.edu</h2></a>
        <a href="https://github.com/bazayd" target="_blank" className="hover:text-xl duration-300 ease-in-out"><h2 className="px-4 text-black">Github</h2></a>
        <a href="https://www.linkedin.com/in/brandonzayd/" target="_blank" className="hover:text-xl duration-300 ease-in-out"><h2 className="px-4 text-black">LinkedIn</h2></a>
        <h2 className="px-4 text-black hover:text-xl duration-300 ease-in-out">(408) 910-7199</h2>
      </div>
    </footer>
  )
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zayd's Portfolio",
  description: "Brandon Zayd Arriaga's Personal Portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
