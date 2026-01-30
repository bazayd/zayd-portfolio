import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-3 text-black">
      <div className="container mx-auto flex justify-between items-center">
        <img
                  className="rounded-full"
                  src="/brandon_img.jpg"
                  alt="Next.js logo"
                  width={50}
                  height={50}
                  />
        <div className="flex flex-column gap-2s divide-x">
          <Link href={"/"} className="font-mono px-4 hover:text-xl duration-300 ease-in-out">Home</Link>
          <Link href={"/experience"} className="font-mono px-4 hover:text-xl xl duration-300 ease-in-out">Experience</Link>
          <Link href={"/projects"} className="font-mono px-4 hover:text-xl xl duration-300 ease-in-out">Projects</Link>
        </div>
      </div>
    </nav>
  )
}

const Footer = () => {
  return (
    <footer className="h-10 m-4">
      <div className="font-mono flex flex-row mx-auto justify-between">
        <a href="brandon.arriaga@sjsu.edu" className="hover:text-xl duration-300 ease-in-out"><h2 className="px-4 text-black">brandon.arriaga@sjsu.edu</h2></a>
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
