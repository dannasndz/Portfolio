"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import ThemeToggle from "@/components/ThemeButton";

const navItems = [
    { label: "Proyectos", href: "#projects", sectionId: "projects" },
    { label: "Sobre mí", href: "#about", sectionId: "about" },
    { label: "Contacto", href: "#contact", sectionId: "contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");

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

    useEffect(() => {
        const sectionIds = navItems.map(item => item.sectionId);
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id);
                }
            },
            { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5] }
        );

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = useCallback((sectionId: string) => {
        setActiveSection(sectionId);
        setIsOpen(false);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/8 bg-background/90 backdrop-blur-xl transition-colors duration-300">
            <nav className="mx-auto flex max-w-7xl min-h-(--navbar-height) items-center justify-between px-6 py-4 sm:px-10 md:px-14 lg:px-20 xl:px-28">
                <Link
                    href="#hero"
                    onClick={() => { setActiveSection(""); setIsOpen(false); }}
                    className="shrink-0 text-lg font-bold tracking-tight flex items-center text-foreground transition-opacity duration-200 hover:opacity-80 sm:text-xl"
                >
                    Danna Sandez
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.sectionId;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => handleNavClick(item.sectionId)}
                                className={`group relative pb-1 text-[0.95rem] font-semibold transition-colors duration-200 ${
                                    isActive
                                        ? "text-foreground"
                                        : "text-foreground/65 hover:text-foreground"
                                }`}
                            >
                                {item.label}
                                <span
                                    className={`absolute inset-x-0 -bottom-px h-[1.5px] rounded-full bg-foreground transition-transform duration-200 origin-left ${
                                        isActive
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                                />
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden items-center gap-2.5 md:flex">
                    <a
                        href="/cv.pdf"
                        download
                        className="inline-flex items-center gap-1.5 rounded-2xl bg-secondary px-4 py-2 text-[0.8rem] font-bold text-background transition-transform duration-200 hover:-translate-y-0.5"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                            <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                            <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                        </svg>
                        CV
                    </a>
                    <ThemeToggle />
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/12 text-foreground transition-colors duration-200 hover:text-primary md:hidden"
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
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
                    {navItems.map((item) => {
                        const isActive = activeSection === item.sectionId;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => handleNavClick(item.sectionId)}
                                className={`rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200 ${
                                    isActive
                                        ? "bg-foreground/5 text-foreground font-semibold"
                                        : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                                }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                    <div className="mt-2 flex items-center gap-3 border-t border-foreground/6 px-4 pt-4">
                        <a
                            href="/cv.pdf"
                            download
                            className="inline-flex items-center gap-1.5 rounded-2xl bg-secondary px-4 py-2 text-[0.8rem] font-bold text-background transition-transform duration-200 hover:-translate-y-0.5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                                <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                                <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                            </svg>
                            CV
                        </a>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
}
