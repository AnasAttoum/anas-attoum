import Header from "@/layouts/header/header";
import About from "@/sections/intro/about";
import Intro from "@/sections/intro/intro";
import Skills from "@/sections/intro/skills";

export default function Home() {
  return (
    <>
      <Header />
      <div className="x-spacing">
        <Intro />
        <About />
        <Skills />
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
}
