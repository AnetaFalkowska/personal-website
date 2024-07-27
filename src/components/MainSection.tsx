import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button.tsx";
import SkillsSlider from "./SkillsSlider.tsx";
import Projects from "./Projects.tsx";


export function MainSection() {

  return (
    <>
      <div className="h-dvh flex flex-col items-center pt-20 my-20">
        <h3 className="font-bold text-3xl">aneta__falkowska</h3>
        <p className="font-bold text-4xl mt-8">React Web Developer</p>
        <a href="#projects" className={twMerge(buttonStyles(), "my-24")}>
          Explore porfolio
        </a>  
        <SkillsSlider/>
      </div>

      <Projects />
    </>
  );
}
