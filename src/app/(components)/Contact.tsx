import Link from "next/link";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-background-secondary px-6 py-20 sm:px-10 sm:py-28 lg:px-8 lg:py-32"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[50vh] w-[60vw] rounded-full bg-primary/8 blur-[140px]"
            />

            <div className="relative mx-auto max-w-7xl text-center">
                <h2 className="text-[2rem] font-black leading-[1.1] tracking-tight text-secondary sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4rem]">
                    ¿Tienes una idea o proyecto
                    <br />
                    <span className="font-serif font-medium italic text-primary">
                        en mente
                    </span>
                    ?
                </h2>

                <p className="mx-auto mt-5 max-w-md text-[0.95rem] leading-relaxed text-foreground/60 sm:mt-7 sm:text-lg md:text-xl">
                    Me encantaría trabajar en ello.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-5">
                    <Link
                        href="https://mail.google.com/mail/?view=cm&to=dannasandez0@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-secondary px-8 py-3.5 text-[0.85rem] font-bold text-background transition-colors duration-200 hover:bg-primary sm:w-auto sm:px-10 sm:py-4 sm:text-[0.9rem]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                            <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                            <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                        </svg>
                        dannasandez0@gmail.com
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/dannasandez/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-primary/30 bg-background px-8 py-3.5 text-[0.85rem] font-semibold text-primary transition-colors duration-200 hover:border-primary/60 hover:bg-primary/5 sm:w-auto sm:px-10 sm:py-4 sm:text-[0.9rem]"
                    >
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-primary text-[0.5rem] font-bold leading-none text-background">
                            in
                        </span>
                        LinkedIn
                    </Link>

                    <Link
                        href="https://github.com/dannasndz"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-primary/30 bg-background px-8 py-3.5 text-[0.85rem] font-semibold text-primary transition-colors duration-200 hover:border-primary/60 hover:bg-primary/5 sm:w-auto sm:px-10 sm:py-4 sm:text-[0.9rem]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                        </svg>
                        GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
}
