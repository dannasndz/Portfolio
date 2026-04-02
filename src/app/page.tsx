import Hero from "./(components)/Hero";
import Projects from "./(components)/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />

      <section
        id="contact"
        className="bg-background px-6 py-20 sm:px-10 sm:py-28 lg:px-8 lg:py-32"
      >
        <div className="mx-auto w-full max-w-7xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Contact
          </h2>
          <p className="text-lg text-foreground/60 sm:text-xl">
            Sección de contacto en proceso...
          </p>
        </div>
      </section>
    </>
  );
}
