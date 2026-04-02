import Image from "next/image";

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-background-secondary px-6 py-10 sm:px-10 sm:py-24 lg:px-10 lg:py-20"
        >
            <div className="mx-auto max-w-7xl">
                {/* ── Section title ── */}
                <h2 className="mb-5 lg:mb-10 text-[2rem] font-black leading-[1.05] tracking-tight text-secondary sm:mb-20 sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4rem]">
                    El Jardín de la
                    <br />
                    <span className="font-serif font-medium italic text-primary">
                        Ingeniería
                    </span>
                    .
                </h2>
                {/* Lirio decorativo — esquina inferior derecha */}
                <Image
                    src="/Lirio.png"
                    alt=""
                    aria-hidden="true"
                    width={1007}
                    height={977}
                    className="opacity-40 absolute bottom-0 right-0"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-2 top-80 h-[60vh] w-[45vw] rounded-full bg-primary/20 blur-[120px]"
                />
                
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-2 top-80 h-[60vh] w-[45vw] rounded-full bg-primary/20 blur-[120px]"
                />
                <div className="relative flex flex-col sm:flex-row sm:items-start gap-5">
                    {/* Image */}

                    <div className="relative shrink-0 overflow-hidden rounded-2xl sm:w-[48%]">
                        <Image
                            src="/Stilo.svg"
                            alt="Sistema Onda — gestión de outfits"
                            width={400}
                            height={600}
                            className="h-auto w-full"
                            priority
                        />

                    </div>

                    {/* ──── Card 2 — Stilo (landscape desktop) ──── */}

                    <div className="flex ">
                        {/* Image */}
                        <div className="relative overflow-hidden rounded-2xl">
                            <Image
                                src="/Onda.svg"
                                alt="Stilo — plataforma musical"
                                width={400}
                                height={400}
                                className="h-auto w-full"
                                priority
                            />
                        </div>

                    </div>
                </div>


            </div>
            {/* ── Ver más button ── */}
            <div className="mt-16 flex justify-center sm:mt-20">
                <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-2xl border border-primary/30 bg-background px-8 py-3.5 text-[0.9rem] font-semibold text-primary transition-colors duration-200 hover:border-primary/60 hover:bg-primary/5 sm:px-10 sm:py-4 sm:text-base"
                >
                    Ver más proyectos
                    <span aria-hidden="true">→</span>
                </button>
            </div>
        </section>
    );
}
