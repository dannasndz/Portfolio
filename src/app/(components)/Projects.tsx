'use client'
import Image from "next/image";
import { useTheme } from "next-themes";
import SplashCursor from '@/components/SplashCursor'
import SplitText from "@/components/SplitText";

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

export default function Projects() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-background-secondary px-6 py-10 sm:px-10 sm:py-24 lg:px-10 lg:py-20"
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
                    className="mb-9 sm:mb-14 lg:mb-16 text-[2rem] font-serif font-medium italic leading-[1.05] tracking-tight text-primary sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4rem]"
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

                {/* Lirio decorativo — esquina inferior derecha */}
                <Image
                    src="/Lirio.png"
                    alt=""
                    aria-hidden="true"
                    width={1007}
                    height={977}
                    className="opacity-40 absolute bottom-0 right-0"
                />

                <div className="relative flex flex-col sm:flex-row sm:items-start gap-20">

                    {/* ── Card 1 — Stilo ── */}
                    <div className="relative shrink-0 overflow-hidden rounded-2xl sm:w-[48%]">
                        <Image
                            src={isDark ? "/StiloD.svg" : "/Stilo.svg"}
                            alt="Stilo — plataforma musical"
                            width={400}
                            height={600}
                            className="h-auto w-full"
                            priority
                        />
                    </div>


                    <div className="flex">
                        <div className="relative overflow-hidden rounded-2xl">
                            <Image
                                src={isDark ? "/OndaD.svg" : "/Onda.svg"}
                                alt="Sistema Onda — gestión de outfits"
                                width={400}
                                height={400}
                                className="h-auto w-full"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}