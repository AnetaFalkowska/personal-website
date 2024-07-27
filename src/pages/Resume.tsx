import DeskImg from "../assets/desk.png";
import ProfilePicture from "../assets/Aneta1.jpg";
import Button from "../components/Button";
import ResumeSection from "../layouts/ResumeSection";
import {experience, education} from "../assets/data.jsx"
import ResumeItem from "../layouts/ResumeItem"

export default function Navbar() {
  return (
    <div className="w-[100%] flex flex-col">
      <section className="flex">
        <div className="flex-grow">
          <nav className="flex justify-center bg-secondary text-secondary-button-text font-thin italic py-8 m-0">
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
          <Button
            variant="inverse"
            className="flex justify-center w-48"
            href=""
          >
            Download CV
          </Button>
        </div>
      </section>

      <ResumeSection
        id="about"
        className="bg-secondary-background-light"
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
      <div id="education" className="w-[70%] max-w-[700px] mx-auto grid grid-cols-2 gap-8">
      <ResumeSection
        innerClassName="w-full "
        title="Education"
        description="What I've learned"
      >
        <ul className="flex flex-col list-none">{education.map(el=><li key={el.timePeriod}><ResumeItem timePeriod={el.time} description={el.description}/></li>)}</ul>
      </ResumeSection>
      <ResumeSection
        innerClassName="w-full "
        title="Experience"
        description="Where I've worked"
      >
        <ul className="flex flex-col list-none">{experience.map(el=><li key={el.timePeriod}><ResumeItem timePeriod={el.time} description={el.description}/></li>)}</ul>
      </ResumeSection>
      </div>
      <ResumeSection
      id="skills"
        className=""
        title="Skills"
        description="What I bring to the table"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        consectetur semper nisl. Curabitur enim leo, fermentum sit amet
        ullamcorper vitae, sodales ac libero. Phasellus rhoncus molestie velit,
        non dignissim enim aliquam ut. Morbi ornare magna dapibus enim pretium
        dictum. Etiam non velit libero. Sed in nisi sem. Morbi a consequat orci,
        lobortis tristique augue. 
      </ResumeSection>
    </div>
  );
}
