"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeButton";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/8 bg-background/90 backdrop-blur-xl transition-colors duration-300">
            <nav className="mx-auto flex max-w-7xl min-h-[var(--navbar-height)] items-center justify-between px-6 py-4 sm:px-10 md:px-14 lg:px-20 xl:px-28">
                <Link
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className="shrink-0 text-lg font-bold tracking-tight flex items-center text-foreground transition-opacity duration-200 hover:opacity-80 sm:text-xl"
                >
                    Danna Sandez
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item, i) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`group relative pb-1 text-[0.95rem] font-semibold transition-colors duration-200 ${
                                i === 0
                                    ? "text-foreground"
                                    : "text-foreground/65 hover:text-foreground"
                            }`}
                        >
                            {item.label}
                            <span
                                className={`absolute inset-x-0 -bottom-px h-[1.5px] rounded-full bg-foreground transition-transform duration-200 origin-left ${
                                    i === 0
                                        ? "scale-x-100"
                                        : "scale-x-0 group-hover:scale-x-100"
                                }`}
                            />
                        </Link>
                    ))}
                </div>

                <div className="hidden items-center gap-2.5 md:flex">
                    <span
                        aria-hidden="true"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/12 text-foreground/60"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="h-3.5 w-3.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
                            <path d="m18.5 15 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
                        </svg>
                    </span>
                    <ThemeToggle />
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/12 text-foreground transition-colors duration-200 hover:text-primary md:hidden"
                    aria-label="Abrir menú"
                    aria-expanded={isOpen}
                >
                    <div className="flex w-4 flex-col items-center gap-[5px]">
                        <span className={`block h-[1.5px] w-full bg-current transition-all duration-300 ${isOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
                        <span className={`block h-[1.5px] w-full bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                        <span className={`block h-[1.5px] w-full bg-current transition-all duration-300 ${isOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
                    </div>
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                className={`overflow-hidden border-t border-foreground/6 bg-background transition-all duration-300 md:hidden ${
                    isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="flex flex-col gap-1 px-6 py-4 sm:px-10">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors duration-200 hover:bg-foreground/5 hover:text-foreground"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="mt-2 flex items-center gap-2.5 border-t border-foreground/6 px-4 pt-4">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
}
