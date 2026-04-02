'use client'
import Link from "next/link";
import Image from "next/image";
import ShinyText from "@/components/ShinyText";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative isolate min-h-dvh overflow-hidden  bg-background pt-14 sm:pt-16 lg:p-15"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 top-0 h-[60vh] w-[45vw] rounded-full bg-primary/10 blur-[120px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-24 top-0 h-[60vh] w-[45vw] rounded-full bg-primary/10 blur-[120px]"
            />

            <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] w-full max-w-7xl flex-col items-center gap-6 px-6 sm:min-h-[calc(100dvh-4rem)] sm:gap-8 sm:px-10 lg:flex-row lg:items-center lg:gap-8   lg:px-8">
                {/* Text — below photo on mobile, left on desktop */}
                <div className="order-last flex flex-1 flex-col items-center justify-center pb-10 pt-2 text-center lg:order-first lg:items-start lg:pb-0 lg:pt-0 lg:text-left">
                    <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-primary sm:mb-3 sm:text-xs md:mb-3 md:text-sm">
                        Ingeniera en Software y Técnologías Emergentes
                    </p>

                    <h1 className="font-black leading-[0.92] tracking-tight text-secondary text-[2.2rem] min-[380px]:text-[2.6rem] min-[420px]:text-[3rem] sm:text-[3.6rem] md:text-[4.4rem] lg:text-[3.8rem] xl:text-[4.8rem]">
                        Construyo
                        <br />
                        <ShinyText
                            text="experiencias"
                            speed={3}
                            delay={0}
                            color="var(--color-primary)"
                            shineColor="#ffffff"
                            spread={120}
                            direction="left"
                            yoyo={false}
                            pauseOnHover={false}
                            disabled={false}
                        />
                        {/* <span className="mt-1 block font-serif text-[0.9em] font-medium italic leading-[1.08] sm:mt-2">
                            experiencias
                        </span> */}
                        <span className="mt-1 block sm:mt-2">digitales que</span>
                        <span className="mt-1 block sm:mt-2">
                            florecen con{" "}
                            <span className="text-accent">lógica</span>.
                        </span>
                    </h1>

                    <p className="mt-4 max-w-xs text-[0.8rem] italic leading-relaxed text-foreground/65 sm:mt-6 sm:max-w-md sm:text-[0.92rem] md:max-w-lg md:text-base">
                        Especialista en análisis y diseño de software.
                        Apasionada por construir sistemas digitales con enfoque en frontend
                        y experiencia de usuario.
                    </p>

                    <div className="mt-6 flex flex-row items-center gap-3 sm:mt-8 sm:gap-4">
                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-secondary px-5 py-3 text-[0.8rem] font-bold text-background transition-colors duration-200 hover:bg-primary sm:px-7 sm:py-3.5 sm:text-[0.9rem]"
                        >
                            Explorar mi trabajo
                            <span aria-hidden="true">→</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/dannasandez/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-2xl  border border-primary/30 bg-background px-8 py-3.5 text-[0.85rem] font-semibold text-primary transition-colors duration-200 hover:border-primary/60 hover:bg-primary/5 sm:px-7 sm:py-3.5 sm:text-[0.9rem]"
                        >
                            <span className="flex h-5 w-5 items-center justify-center rounded bg-primary text-[0.5rem] font-bold leading-none text-background">
                                in
                            </span>
                            LinkedIn
                        </Link>
                    </div>
                </div>

                {/* Photo circle — above text on mobile, right on desktop */}
                <div className="order-first flex shrink-0 items-center justify-center pt-8 sm:pt-10 lg:order-last lg:pt-0">
                    <div className="relative">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 scale-125 rounded-full bg-primary/12 blur-3xl"
                        />
                        <Image
                            src="/me.jpeg"
                            alt="Danna Sandez"
                            width={480}
                            height={480}
                            priority
                            className="relative h-52 w-52 rounded-full object-cover min-[380px]:h-56 min-[380px]:w-56 min-[420px]:h-60 min-[420px]:w-60 sm:h-80 sm:w-80 md:h-80 md:w-80 lg:h-88 lg:w-88 xl:h-96 xl:w-96"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
