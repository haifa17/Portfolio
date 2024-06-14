import Experience from "@/components/experience/Experience";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";


export default function Home() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-10 lg:gap-20 items-center justify-center py-10 overflow-hidden ">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
