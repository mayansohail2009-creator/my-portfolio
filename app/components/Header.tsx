"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#credentials", label: "Credentials" },
  { href: "#lab", label: "Lab" },
];

export default function Header(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link
            href="/"
            className="text-xl font-semibold text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Mohammad Ayan
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href} className="m-0 p-0">
                <Link
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors text-base font-normal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 shrink-0 -mr-2"
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform duration-200 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform duration-200 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile nav panel */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-5 list-none m-0 p-0 pb-2">
            {navItems.map((item) => (
              <li key={item.href} className="m-0 p-0">
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-accent transition-colors text-base font-normal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
