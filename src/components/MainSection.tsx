import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../layouts/Button.tsx";
import { technologies } from "../assets/data.ts";
import SkillsSlider from "./SkillsSlider.tsx";
import Projects from "./Projects.tsx";
import ProfilePicture from "../assets/Aneta1.jpg";
import dots from "../assets/dots.jpg";
import code from "../assets/code.jpg";

export function MainSection() {
  return (
    <>
      <ProfileSection />
      <TechnologyList />
      <SkillsSlider />
      <Projects />
    </>
  );
}

function ProfileSection() {
  return (
    <>
      <div className="relative w-full h-[300px]">
        <img src={dots} className="w-full h-full object-cover" />
        <div className="bg-[#AA2D5A] w-full h-full absolute top-0 left-0 opacity-80"></div>
        <div className="bg-transparent absolute top-0 left-[50%] translate-x-[-50%] text-center">
          <div className="mx-auto py-10 text-secondary-button-text">
            <p className="text-3xl font-black mb-5">Aneta Falkowska</p>
            <p className="italic text-4xl">React Web Developer</p>
          </div>
          <img
            src={ProfilePicture}
            className="w-48 rounded-[50%] border-8 border-white mx-auto"
          />
        </div>
      </div>
      <div className="px-[20%] py-14 text-center">
        <header className="flex flex-col text-secondary-text my-9">
          <p className="text-2xl font-thin italic">About Me</p>
          <p className="uppercase text-sm font-thin tracking-widest">
            My background
          </p>
        </header>
        <main className="text-gray-800">
          Frontend Developer with a strong foundation in project management and
          key account expertise. Currently focused on building responsive web
          applications using React, JavaScript HTML and CSS. I excel in
          cross-team collaboration, problem-solving, and delivering
          client-focused solutions. My analytical mindset and ability to work
          under pressure enable me to translate complex requirements into
          high-quality, user-friendly interfaces.
        </main>
        <a
          href="#projects"
          className={twMerge(buttonStyles(), "mt-10 w-60 mx-auto")}
        >
          Explore porfolio
        </a>
      </div>
    </>
  );
}

function TechnologyList() {
  return (
    <div className="relative w-full h-[420px]">
      <img src={code} className="w-full h-full object-cover" />
      <div className="bg-[#f4d6e9] w-full h-full absolute top-0 left-0 opacity-90"></div>
      <div className="flex gap-4 justify-around flex-wrap py-10 absolute top-0 left-0 px-[20%]">
        {technologies.map((el, index) => (
          <TechnologyItem key={index} {...el} />
        ))}
      </div>
    </div>
  );
}

type ResumeItemProps = {
  name: string;
  icon: string;
  description: string;
};

function TechnologyItem({ name, icon, description }: ResumeItemProps) {
  return (
    <div className="group w-60 text-center">
      <img src={icon} className="mx-auto w-10 h-10" />
      <p className="mt-2 text-lg">{name}</p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
        {description}
      </p>
    </div>
  );
}
