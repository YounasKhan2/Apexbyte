"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-white/80 backdrop-blur-md shadow-soft" : ""}`}>
      <nav className="container flex items-center justify-between py-4">
        <Link href="#home" className="flex items-center gap-2">
          <img src="/icon.svg" alt="ApexByte logo" className="h-8 w-8 animate-float" loading="eager" />
          <span className="font-heading text-xl tracking-tight">ApexByte</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="link-underline text-slate-700 hover:text-slate-900">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="#contact" className="hidden md:inline-block rounded-2xl bg-slate-900 text-white px-4 py-2 hover:shadow-glow transition">
          Start a Project
        </Link>
      </nav>
    </header>
  );
}
