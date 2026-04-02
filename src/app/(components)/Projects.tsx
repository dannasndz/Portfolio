'use client'
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect, useRef, useCallback } from "react";
import SplitText from "@/components/SplitText";

const handleAnimationComplete = () => {};

const projects = [
    { light: "/Stilo.svg", dark: "/StiloD.svg", alt: "Stilo — plataforma musical", w: 400, h: 600 },
    { light: "/Onda.svg", dark: "/OndaD.svg", alt: "Sistema Onda — gestión de outfits", w: 400, h: 400 },
    { light: "/SheShips.svg", dark: "/SheShipsD.svg", alt: "SheShips — comunidad de mujeres en tech", w: 400, h: 600 },
    { light: "/Nasa.svg", dark: "/NasaD.svg", alt: "NASA Space Apps Challenge", w: 400, h: 400 },
];

const PAGES = [projects.slice(0, 2), projects.slice(2, 4)];

export default function Projects() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [page, setPage] = useState(0);
    const [loadedMap, setLoadedMap] = useState<Record<string, boolean>>({});
    const [sliding, setSliding] = useState(false);
    const prevTheme = useRef<string | undefined>(undefined);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (prevTheme.current !== undefined && prevTheme.current !== resolvedTheme) {
            setLoadedMap({});
        }
        prevTheme.current = resolvedTheme;
    }, [resolvedTheme]);

    const isDark = mounted && resolvedTheme === 'dark';

    const goTo = useCallback((next: number) => {
        if (next === page || sliding) return;
        setSliding(true);
        setTimeout(() => {
            setPage(next);
            setSliding(false);
        }, 300);
    }, [page, sliding]);

    const markLoaded = useCallback((key: string) => {
        setLoadedMap(prev => ({ ...prev, [key]: true }));
    }, []);

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-background-secondary px-6 py-10 sm:px-10 sm:py-24 lg:px-10 lg:py-20 pb-24 sm:pb-28 lg:pb-24"
        >
            <div className="mx-auto max-w-7xl">

                <h2 className="text-center">
                    <SplitText
                        text="El Jardín de la"
                        className="mb-0 text-[2rem] font-black leading-[1.05] tracking-tight text-secondary sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4rem]"
                        tag="span"
                        delay={50}
                        duration={1.25}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                    <br />
                    <SplitText
                        text="Ingeniería."
                        className="mb-6 sm:mb-14 lg:mb-16 text-[2rem] font-serif font-medium italic leading-[1.05] tracking-tight text-primary sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4rem]"
                        tag="span"
                        delay={50}
                        duration={1.25}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </h2>

                <Image
                    src="/Lirio.png"
                    alt=""
                    aria-hidden="true"
                    width={1007}
                    height={977}
                    className="pointer-events-none absolute -left-12 -top-6 z-0 w-[65vw] max-w-[420px] -scale-x-100 opacity-10 sm:-left-16 sm:-top-10 sm:w-[50vw] sm:max-w-[480px] sm:opacity-12 lg:-left-20 lg:-top-12 lg:w-auto lg:max-w-none lg:opacity-15"
                />

                <Image
                    src="/Lirio.png"
                    alt=""
                    aria-hidden="true"
                    width={1007}
                    height={977}
                    className="pointer-events-none absolute -bottom-8 -right-12 w-[70vw] max-w-[500px] opacity-60 sm:-bottom-10 sm:-right-16 sm:w-[50vw] sm:max-w-[550px] sm:opacity-50 lg:-bottom-12 lg:-right-20 lg:w-auto lg:max-w-none lg:opacity-40"
                />

                {/* ── Carousel ── */}
                <div className="relative">
                    <div
                        className={`relative flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10 lg:gap-20 transition-opacity duration-300 ${sliding ? 'opacity-0' : 'opacity-100'}`}
                    >
                        {PAGES[page].map((proj) => {
                            const src = isDark ? proj.dark : proj.light;
                            const loaded = loadedMap[src];
                            return (
                                <div key={proj.alt} className="relative shrink-0 overflow-hidden rounded-2xl sm:w-[48%]">
                                    {!loaded && <div className="absolute inset-0 animate-pulse rounded-2xl bg-foreground/5" />}
                                    <Image
                                        src={src}
                                        alt={proj.alt}
                                        width={proj.w}
                                        height={proj.h}
                                        className={`h-auto w-full transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                                        priority={page === 0}
                                        onLoad={() => markLoaded(src)}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* ── Navigation ── */}
                    <div className="mt-8 flex items-center justify-center gap-4 sm:mt-12">
                        <button
                            onClick={() => goTo(page - 1)}
                            disabled={page === 0}
                            aria-label="Página anterior"
                            className="flex h-9 w-9 items-center cursor-pointer justify-center rounded-full border border-foreground/12 text-foreground/60 transition-all duration-200 hover:border-foreground/30 hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <div className="flex items-center gap-2">
                            {PAGES.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    aria-label={`Ver página ${i + 1} de proyectos`}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        i === page
                                            ? 'w-6 bg-primary'
                                            : 'w-2 bg-foreground/20 hover:bg-foreground/40'
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => goTo(page + 1)}
                            disabled={page === PAGES.length - 1}
                            aria-label="Página siguiente"
                            className="flex h-9 w-9 items-center cursor-pointer justify-center rounded-full border border-foreground/12 text-foreground/60 transition-all duration-200 hover:border-foreground/30 hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}