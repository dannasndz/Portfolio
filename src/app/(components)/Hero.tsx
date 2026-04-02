import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="about"
            className="relative isolate min-h-screen overflow-hidden bg-background pt-14 sm:pt-16"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 top-0 h-[60vh] w-[45vw] rounded-full bg-primary/10 blur-[120px]"
            />

            <div className="mx-auto flex min-h-[calc(100dvh-var(--navbar-height,56px))] mx-auto flex w-full max-w-7xl flex-col items-center gap-8 
            sm:px-10 
            md:flex-col
            lg:flex-row 
            lg:items-center 
            lg:gap-8 
            lg:px-8">
                {/* Text */}
                <div className="flex flex-1 flex-col justify-center items-center text-center pb-4 pt-10">
                    <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-primary
                    sm:text-xs
                    md:mb-3 
                    md:text-sm ">
                        Ingeniera en Software y Técnologías Emergentes
                    </p>
                    <div>
                        <h1 className="font-black leading-[0.92] tracking-tight text-secondary text-[2.4rem] min-[420px]:text-[3rem] sm:text-[3.6rem] md:text-[4.4rem] lg:text-[3.8rem] xl:text-[4.8rem]">
                            Construyo

                            <span className="mt-1 block font-serif text-[0.9em] font-medium italic leading-[1.08] text-primary sm:mt-2">
                                experiencias
                            </span>
                            <span className="mt-1 block sm:mt-2">digitales que</span>
                            <span className="mt-1 block sm:mt-2">
                                florecen con{" "}
                                <span className="text-primary ">lógica</span>.
                            </span>
                        </h1>
                    </div>

                    <div className="max-w-md text-[0.82rem] italic leading-relaxed text-foreground/65 mt-5 mb-5
                    sm:pt-10
                    sm:max-w-lg 
                    sm:text-[0.92rem]
                    md:text-base 
                    md:mb-0
                    lg:pt-5
                    lg:mt-0
                    lg:mb-0
                    ">
                        <p>
                            Especialista en análisis y diseño de software.
                            <br className="hidden sm:block" />
                            Apasionada por construir sistemas digitales con enfoque en frontend
                            y experiencia de usuario.
                        </p>
                    </div>

                    <div className="flex flex-col  min-[420px]:flex-row min-[420px]:items-center
                    sm:mt-9 sm:gap-4">
                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-secondary px-7 py-3.5 text-[0.85rem] font-bold text-background transition-transform duration-200 hover:-translate-y-0.5 sm:px-8 sm:py-4 sm:text-[0.95rem]"
                        >
                            Explorar mi trabajo
                            <span aria-hidden="true">→</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-primary/25 bg-background px-7 py-3.5 text-[0.85rem] font-semibold text-primary transition-colors duration-200 hover:border-primary/50 sm:px-8 sm:py-4 sm:text-[0.95rem]"
                        >
                            <span className="flex h-5 w-5 items-center justify-center rounded bg-primary text-[0.5rem] font-bold leading-none text-background sm:h-[1.35rem] sm:w-[1.35rem] sm:text-[0.6rem]">
                                in
                            </span>
                            LinkedIn
                        </Link>
                    </div>
                </div>

                {/* Photo circle */}
                <div className="relative flex w-full max-w-md flex-1 justify-center sm:flex-col">
                    <div
                        aria-hidden="true"
                        className="absolute h-48 w-48 rounded-full bg-primary/12 blur-3xl min-[420px]:h-56 min-[420px]:w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80"
                    />
                    <Image
                        src="/me.jpeg"
                        alt="Danna Sandez"
                        width={480}
                        height={480}
                        priority
                        className="relative h-48 w-48 rounded-full object-cover min-[420px]:h-56 min-[420px]:w-56 
                        sm:h-64 sm:w-64 
                        md:h-72 md:w-72 
                        lg:h-72 lg:w-72 
                        xl:h-110 xl:w-180"
                    />
                </div>
            </div>
        </section>
    );
}
