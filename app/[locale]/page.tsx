import About from "@/sections/intro/about";
import Intro from "@/sections/intro/intro";
import Projects from "@/sections/intro/projects";
import Skills from "@/sections/intro/skills";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
