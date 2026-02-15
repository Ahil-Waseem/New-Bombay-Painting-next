"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

import { Menu, X, ChevronDown, Phone } from "lucide-react";


type NavLink = {
  name: string;
  path?: string;
  dropdown?: { name: string; path: string }[];
};

type NavbarProps = {
  links: NavLink[];
  ctaText: string;
};

export default function Navbar({ links = [], ctaText }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="w-full bg-black sticky top-0 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 xl:px-0 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo/logo.png"
            alt="New Bombay Painting Logo"
            width={220}
            height={60}
            priority
            className="w-[150px] sm:w-[180px] md:w-[220px] h-auto"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative group">

                {/* SERVICES LINK */}
                <Link
                  href="/services"
                  className="text-white hover:text-yellow-400 font-medium text-lg transition-colors"
                >
                  {link.name}
                </Link>

                {/* DROPDOWN */}
                <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-black/90 backdrop-blur-md shadow-lg rounded-md py-3 w-64 border border-gray-700 z-50">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition-all"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.path || "/"}
                className={`text-white hover:text-yellow-400 font-medium text-lg transition-colors ${
                  pathname === link.path ? "text-yellow-400" : ""
                }`}
              >
                {link.name}
              </Link>
            )
          )}

          {/* CONTACT BUTTON */}
          <Link
            href="/contact"
            className="bg-yellow-500 text-white text-lg font-bold px-6 py-3 inline-flex items-center gap-2 rounded-lg hover:bg-yellow-400 transition-all shadow-lg"
          >
            <Phone size={20} />
            {ctaText}
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-md border-t border-gray-800">
          <div className="flex flex-col items-center space-y-4 py-4">

            {links.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="w-full px-4">
                  <details className="group w-full">
                    <summary className="flex items-center justify-between w-full cursor-pointer py-3 px-3 bg-black/40 border border-yellow-500 rounded-md text-white text-lg">
                      <span className="mx-auto">{link.name}</span>
                      <ChevronDown
                        size={20}
                        className="transition-transform duration-300 group-open:rotate-180"
                      />
                    </summary>

                    <div className="mt-2 pl-2 pb-3 space-y-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block text-center text-white py-2 rounded-md hover:bg-yellow-500 hover:text-black"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.path || "/"}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg hover:text-yellow-400"
                >
                  {link.name}
                </Link>
              )
            )}

            {/* MOBILE CONTACT */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-all shadow-lg inline-flex items-center gap-2"
            >
              <Phone size={20} />
              {ctaText}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
