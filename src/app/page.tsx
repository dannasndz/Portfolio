import Hero from "./(components)/Hero";
import Projects from "./(components)/Projects";
import More from "./(components)/More";
import Contact from "./(components)/Contact";
import SplashCursor from "@/components/SplashCursor";

export default function Home() {
  return (
    <>
      <SplashCursor />
      <Hero />
      <Projects />
      <More />
      <Contact />
    </>
  );
}
