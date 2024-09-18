import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../layouts/Button.tsx";
import { technologies } from "../assets/data.ts";
import SkillsSlider from "./SkillsSlider.tsx";
import Projects from "./Projects.tsx";
import ProfilePicture from "../../public/images/Profile_picture.jpg";
import Container from "../layouts/Container.tsx";

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
      <div className="relative w-full h-[220px] sm:h-[260px] bg-main-custom-pattern bg-cover bg-center text-center my-0">
        {/* <img src={dots} className="w-full h-full object-cover" />
        <div className="bg-[#AA2D5A] w-full h-full absolute top-0 left-0 opacity-80"></div>
        <div className="bg-transparent absolute top-0 left-[50%] -translate-x-[50%] text-center"> */}
          <div className="py-5 sm:py-8 text-secondary-button-text">
            <p className="text-2xl sm:text-3xl font-black mb-5">
              Aneta Falkowska
            </p>
            <p className="text-3xl sm:text-4xl whitespace-nowrap">
              React Developer
            </p>
          </div>
          <img
            src={ProfilePicture}
            className="w-48 rounded-[50%] border-8 border-secondary-background outline outline-2 outline-offset-[-9px] outline-secondary-background mx-auto"
          />
        {/* </div> */}
      </div>
      <Container maxWidth="max-w-[730px]">
        <div className="pt-24 pb-20 text-center">
          <header className="text-secondary py-9">
            <p className="text-2xl sm:text-3xl font-medium">About Me</p>
            {/* <p className="uppercase text-sm font-thin tracking-widest">
              My background
            </p> */}
          </header>
          <main className="text-gray-600">
            Frontend Developer with a strong foundation in project management
            and key account expertise. Currently focused on building responsive
            web applications using React, JavaScript, HTML and CSS. I excel in
            cross-team collaboration, problem-solving, and delivering
            client-focused solutions. My analytical mindset and ability to work
            under pressure enable me to translate complex requirements into
            high-quality, user-friendly interfaces.
          </main>
          <a
            href="#projects"
            className={twMerge(buttonStyles(), "mt-10 mx-auto w-60")}
          >
            Explore porfolio
          </a>
        </div>
      </Container>
    </>
  );
}

function TechnologyList() {
  return (
    <div className="w-full bg-technology-custom-pattern bg-cover bg-center text-center pb-10">
      <Container maxWidth="max-w-[1100px]">
      <header className="text-gray-800 py-10 sm:py-16 ">
            <p className="text-2xl sm:text-3xl font-medium">Technologies I Use</p>

          </header>
        <div className="flex flex-wrap gap-4 justify-center">
          {technologies.map((el, index) => (
            <TechnologyItem key={index} {...el} />
          ))}
        </div>
      </Container>
    </div>

    // <div className="relative w-full h-[650px] sm:h-[450px] lg:h-[390px]">
    //   <img src={code} className="w-full h-full object-cover" />
    //   <div className="bg-[#f4d6e9] w-full h-full absolute top-0 left-0 opacity-90"></div>
    //   {/* <div className="max-w-[1100px] w-[90%] grid gap-4 grid-cols-[repeat(auto-fill,minmax(100px,200px))] justify-items-center py-10 absolute top-0 left-[50%] translate-x-[-50%]"> */}
    //   <div className="max-w-[1100px] w-[97%] md:w-[90%] flex gap-x-2 gap-y-1 xl:gap-y-4 justify-center flex-wrap absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
    //     {technologies.map((el, index) => (
    //       <TechnologyItem key={index} {...el} />
    //     ))}
    //   </div>
    // </div>
  );
}

type ResumeItemProps = {
  name: string;
  icon: string;
};

function TechnologyItem({ name, icon }: ResumeItemProps) {
  return (
    // <div className="group w-32 lg:w-48 xl:w-60 text-center rounded-2xl p-2">
    //   <img src={icon} className="mx-auto w-10 h-10 group-hover:opacity-100" />
    //   <p className="mt-2 text-base lg:text-lg">{name}</p>
    //   <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs xl:text-sm">
    //     {description}
    //   </p>
    // </div>
    <div className="w-32 text-center text-gray-700 p-3">
      <img src={icon} className="mx-auto h-12 " />
       <p className="mt-2 text-base lg:text-lg">{name}</p>
       {/* <p className="text-xs xl:text-sm">
         {description}
       </p>       */}
    </div>
  );
}

{
  /* <div className="max-w-[1100px] w-[90%] flex gap-x-1 gap-y-1 xl:gap-y-4 justify-around flex-wrap py-10 absolute top-0 left-[50%] translate-x-[-50%]"></div> */
}
