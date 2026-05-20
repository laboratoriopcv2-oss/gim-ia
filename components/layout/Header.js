"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Programas", href: "#programas" },
    { label: "Planes", href: "#planes" },
   { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8 xl:px-0">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D6B25E]/40 bg-[#D6B25E]/10 shadow-[0_0_30px_rgba(214,178,94,0.18)]">
            <span className="text-lg font-black text-[#D6B25E]">D</span>
          </div>

          <div className="leading-none">
            <p className="text-lg font-black uppercase tracking-[0.18em] text-white">
              Diamant
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#D6B25E]">
              Gym
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70 transition duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#planes"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition duration-300 hover:border-[#D6B25E]/70 hover:text-[#D6B25E]"
          >
            Ver planes
          </a>

          <a
            href="#contacto"
            className="rounded-full bg-[#D6B25E] px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-black shadow-[0_0_35px_rgba(214,178,94,0.25)] transition duration-300 hover:scale-[1.03] hover:bg-white"
          >
            Únete ahora
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden"
          aria-label="Abrir menú"
        >
          <span className="relative flex h-5 w-6 flex-col justify-between">
            <span
              className={`h-0.5 w-full rounded-full bg-white transition duration-300 ${
                isOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-white transition duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-white transition duration-300 ${
                isOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[520px]" : "max-h-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white/75 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <div className="mt-4 grid gap-3">
            <a
              href="#planes"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.12em] text-white"
            >
              Ver planes
            </a>

            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-[#D6B25E] px-5 py-3 text-center text-sm font-black uppercase tracking-[0.12em] text-black"
            >
              Únete ahora
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}