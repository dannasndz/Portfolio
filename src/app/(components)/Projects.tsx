'use client'
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import SplashCursor from '@/components/SplashCursor'
import SplitText from "@/components/SplitText";

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

export default function Projects() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [stiloLoaded, setStiloLoaded] = useState(false);
    const [ondaLoaded, setOndaLoaded] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        setStiloLoaded(false);
        setOndaLoaded(false);
    }, [resolvedTheme]);

    const isDark = mounted && resolvedTheme === 'dark';

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-background-secondary px-6 py-10 sm:px-10 sm:py-24 lg:px-10 lg:py-20 pb-24 sm:pb-28 lg:pb-24"
        >
            <SplashCursor />
            <div className="mx-auto max-w-7xl">

                {/* ── Section title ── */}
                <SplitText
                    text="El Jardín de la"
                    className="mb-0 text-[2rem] font-black leading-[1.05] tracking-tight text-secondary sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4rem]"
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

                {/* Lirio decorativo — esquina superior izquierda (solo desktop) */}
                <Image
                    src="/Lirio.png"
                    alt=""
                    aria-hidden="true"
                    width={1007}
                    height={977}
                    className="pointer-events-none absolute -left-12 -top-6 z-0 w-[65vw] max-w-[420px] -scale-x-100 opacity-10 sm:-left-16 sm:-top-10 sm:w-[50vw] sm:max-w-[480px] sm:opacity-12 lg:-left-20 lg:-top-12 lg:w-auto lg:max-w-none lg:opacity-15"
                />

                {/* Lirio decorativo — esquina inferior derecha */}
                <Image
                    src="/Lirio.png"
                    alt=""
                    aria-hidden="true"
                    width={1007}
                    height={977}
                    className="pointer-events-none absolute -bottom-8 -right-12 w-[70vw] max-w-[500px] opacity-60 sm:-bottom-10 sm:-right-16 sm:w-[50vw] sm:max-w-[550px] sm:opacity-50 lg:-bottom-12 lg:-right-20 lg:w-auto lg:max-w-none lg:opacity-40"
                />

                <div className="relative flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10 lg:gap-20">

                    {/* ── Card 1 — Stilo ── */}
                    <div className="relative shrink-0 overflow-hidden rounded-2xl sm:w-[48%]">
                        {!stiloLoaded && <div className="absolute inset-0 animate-pulse rounded-2xl bg-foreground/5" />}
                        <Image
                            src={isDark ? "/StiloD.svg" : "/Stilo.svg"}
                            alt="Stilo — plataforma musical"
                            width={400}
                            height={600}
                            className={`h-auto w-full transition-opacity duration-500 ${stiloLoaded ? 'opacity-100' : 'opacity-0'}`}
                            priority
                            onLoad={() => setStiloLoaded(true)}
                        />
                    </div>

                    <div className="flex">
                        <div className="relative overflow-hidden rounded-2xl">
                            {!ondaLoaded && <div className="absolute inset-0 animate-pulse rounded-2xl bg-foreground/5" />}
                            <Image
                                src={isDark ? "/OndaD.svg" : "/Onda.svg"}
                                alt="Sistema Onda — gestión de outfits"
                                width={400}
                                height={400}
                                className={`h-auto w-full transition-opacity duration-500 ${ondaLoaded ? 'opacity-100' : 'opacity-0'}`}
                                priority
                                onLoad={() => setOndaLoaded(true)}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}