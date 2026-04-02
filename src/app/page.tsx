import Hero from "./(components)/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section
        id="projects"
        className="flex min-h-[70vh] items-center justify-center bg-foreground/5 px-6 py-20 sm:px-10 sm:py-28 md:px-14 lg:px-20 xl:px-28"
      >
        <div className="mx-auto w-full max-w-7xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Projects
          </h2>
          <p className="text-lg text-foreground/70 sm:text-xl md:text-2xl">
            Proyectos destacados en proceso...
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="flex min-h-[60vh] items-center justify-center px-6 py-20 sm:px-10 sm:py-28 md:px-14 lg:px-20 xl:px-28"
      >
        <div className="mx-auto w-full max-w-7xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Contact
          </h2>
          <p className="text-lg text-foreground/70 sm:text-xl md:text-2xl">
            Sección de contacto en proceso...
          </p>
        </div>
      </section>
    </>
  );
}
