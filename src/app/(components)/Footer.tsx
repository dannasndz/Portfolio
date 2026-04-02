import Link from "next/link";

const navItems = [
    { label: "Proyectos", href: "#projects" },
    { label: "Sobre mí", href: "#about" },
    { label: "Contacto", href: "#contact" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-foreground/8 bg-background transition-colors duration-300">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-5 lg:px-8">
                <p className="text-[0.8rem] text-foreground/45">
                    © {year}{" "}
                    <Link href="#hero" className="font-semibold text-foreground/70 transition-colors duration-200 hover:text-foreground">
                        Danna Sandez
                    </Link>
                    <span className="mx-1.5 text-foreground/20">·</span>
                    Hecho con <span className="font-serif italic text-primary">dedicación</span> y mucho café.
                </p>

                <nav className="flex items-center gap-5">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-[0.8rem] font-medium text-foreground/55 transition-colors duration-200 hover:text-foreground"
                        >
                            {item.label}
                        </Link>
                    ))}

                    <span className="mx-0.5 h-3.5 w-px bg-foreground/12" aria-hidden />

                    <a href="https://www.linkedin.com/in/dannasandez/" target="_blank" rel="noreferrer" className="text-foreground/45 transition-colors duration-200 hover:text-foreground" aria-label="LinkedIn">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/80 text-[0.45rem] font-bold leading-none text-background hover:bg-primary">in</span>
                    </a>
                    <a href="https://github.com/dannasndz" target="_blank" rel="noreferrer" className="text-foreground/45 transition-colors duration-200 hover:text-foreground" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                        </svg>
                    </a>
                </nav>
            </div>
        </footer>
    );
}
