import DeskImg from "../assets/desk.png";
import ProfilePicture from "../assets/Aneta1.jpg";
import Button from "../components/Button";
import ResumeSection from "../layouts/ResumeSection";
import { experience, education, skills } from "../assets/data.js";
import ResumeItem from "../layouts/ResumeItem";
import SkillItem from "../layouts/SkillItem.js";
import { CircleArrowUp } from "lucide-react";

const scrollToTop = () => {
  document.getElementById("resume-nav").scrollIntoView({ behavior: "smooth" });
};

export default function Resume() {
  return (
    <div className="w-[100%] flex flex-col">
      <section className="flex">
        <div className="flex-grow">
          <nav
            id="resume-nav"
            className="flex justify-center bg-secondary text-secondary-button-text font-thin italic py-8 m-0 scroll-mt-24"
          >
            <ul className="flex gap-8">
              <li className="text-center hover:text-gray-400 whitespace-nowrap">
                <a href="#about">About me</a>
              </li>
              <li className="text-center hover:text-gray-400 whitespace-nowrap">
                <a href="#education">Education & Experience</a>
              </li>

              <li className="text-center hover:text-gray-400 whitespace-nowrap">
                <a href="#skills">Skills & Languages</a>
              </li>

              <li className="text-center hover:text-gray-400 whitespace-nowrap">
                <a href="#interests">Interests</a>
              </li>
            </ul>
          </nav>
          <div className="flex-grow h-[400px] relative">
            <img
              src={DeskImg}
              className="w-full h-full object-cover absolute top-0 left-0 z-40"
            />
            <div className="absolute bottom-20 left-8 text-secondary-button-text">
              <p className="uppercase text-2xl font-thin tracking-widest mb-2">
                Hello, I'm
              </p>
              <p className="text-6xl font-black mb-5">Aneta Falkowska.</p>
              <p className="italic text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[30%] max-w-[320px] flex flex-col gap-10 justify-end items-center bg-secondary text-secondary-button-text pb-12">
          <img src={ProfilePicture} className="w-40 rounded-[50%] shadow-lg" />
          <div className="text-center text-sm">
            <p>https://github.com/AnetaFalkowska</p>
            <p>aneta.falkowska@gmail.com</p>
            <p>502 394 679</p>
          </div>
          <Button variant="inverse" href="">
            Download CV
          </Button>
        </div>
      </section>

      <ResumeSection
        id="about"
        className="bg-secondary-background-light text-lg font-light"
        title="About Me"
        description="My background"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        consectetur semper nisl. Curabitur enim leo, fermentum sit amet
        ullamcorper vitae, sodales ac libero. Phasellus rhoncus molestie velit,
        non dignissim enim aliquam ut. Morbi ornare magna dapibus enim pretium
        dictum. Etiam non velit libero. Sed in nisi sem. Morbi a consequat orci,
        lobortis tristique augue.
      </ResumeSection>
      <div
        id="education"
        className="w-[70%] max-w-[700px] mx-auto grid grid-cols-2 gap-8 scroll-mt-24"
      >
        <ResumeSection
          innerClassName="w-full "
          title="Education"
          description="What I've learned"
        >
          <ul className="flex flex-col list-none">
            {education.map((el) => (
              <li key={el.time}>
                <ResumeItem timePeriod={el.time} description={el.description} />
              </li>
            ))}
          </ul>
        </ResumeSection>
        <ResumeSection
          innerClassName="w-full "
          title="Experience"
          description="Where I've worked"
        >
          <ul className="flex flex-col list-none">
            {experience.map((el) => (
              <li key={el.time}>
                <ResumeItem timePeriod={el.time} description={el.description} />
              </li>
            ))}
          </ul>
        </ResumeSection>
      </div>
      <ResumeSection

        id="skills"
        title="Skills"
        description="What I bring to the table"
      >
        <ul className="flex flex-col list-none">
          {skills.map((el) => (
            <li key={el.title}>
              <SkillItem title={el.title} value={el.value} />
            </li>
          ))}
        </ul>
      </ResumeSection>
      <ResumeSection

        id="interests"
        title="Interests"
        description="Out of office"
      >
        Lorem ipsum dolor sit amet, con
      </ResumeSection>
      <footer className="grid grid-cols-3 justify-items-center bg-secondary text-secondary-button-text text-sm py-8 px-10 m-0">
        <div>
          <p>https://github.com/AnetaFalkowska</p>
          <p>502 394 679</p>
        </div>
        <Button variant="inverse" href="">
          Download CV
        </Button>
        <Button size="icon" onClick={scrollToTop}>
          <CircleArrowUp size={40} />
        </Button>
      </footer>
    </div>
  );
}
