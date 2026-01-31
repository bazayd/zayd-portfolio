"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

// used for navlinks mapping, includes links to all pages
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/info", label: "More About Me" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // current URl you're on
  // usepathname() reads current url
  const pathname = usePathname();

  // closes route when pathname changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="p-3 text-black">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
            <img
          className="rounded-full"
          src="/brandon_img.jpg"
          alt="Brandon profile photo"
          width={50}
          height={50}
          />

        </Link>
        

        {/* desktop view */}
        <div className="hidden sm:flex flex-wrap items-center gap-2 sm:gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono px-2 sm:px-4 hover:text-lg sm:hover:text-xl duration-300 ease-in-out"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* mobile view */}
        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-zinc-100 duration-300 ease-in-out"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label="Open main menu"
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon />
          
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="sm:hidden container mx-auto mt-4 rounded-lg border border-zinc-300 bg-white p-2"
        >
          <div className="flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono px-3 py-2 rounded hover:bg-zinc-100 duration-300 ease-in-out"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}