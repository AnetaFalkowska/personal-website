import DeskImg from "../assets/desk.png";
import ProfilePicture from "../assets/Aneta1.jpg";
import Button from "../layouts/Button.js";
import ResumeSection from "../components/ResumeSection.js";
import { experience, education, skills } from "../assets/data.js";
import ResumeItem from "../components/ResumeItem.js";
import SkillItem from "../components/SkillItem.js";

export default function Resume() {
  return (
    <>
      <div
        id="projects"
        // className="max-w-[1100px] w-[90%] mx-auto mb-28 p-8 scroll-mt-24"
      >
        <div className="max-w-3xl border-t-4 rounded-lg border-secondary shadow-lg mx-auto my-10 p-8">
          <header className="text-center mb-8">
            <h1 className="text-gray-800 font-bold text-3xl mb-2">
              Aneta Falkowska
            </h1>
            <h4 className="text-gray-700 text-xl">React Web Developer</h4>
            <p className="text-gray-600 text-sm mt-1">
              aneta.falkowska@gmail.com | (+48) 502 394 679
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-gray-800 font-semibold text-2xl border-b-[1px] border-secondary mb-3 pb-2">
              Experience
            </h2>
            <div className="bg-[#f8f8fa] rounded-lg shadow-sm p-4 mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Team Leader, Key Account Management
              </h3>
              <p className="text-gray-700">RR Donnelley, 2008-2009</p>
              <ul className="text-gray-600 mt-3 list-disc list-inside">
                <li>
                  Managed a dedicated team responsible for the comprehensive
                  service of the Stryker account across Europe and beyond.
                </li>
                <li>
                  Coordinated projects related to the implementation of new
                  products, adhering to the high standards of the automotive
                  industry (PPAP).
                </li>
                <li>
                  Successfully led change management initiatives for Stryker,
                  navigating strict client regulations.
                </li>
                <li>
                  Collaborated with client units across different regions,
                  requiring adaptation to local needs and standards.
                </li>                
              </ul>
              <p className="text-gray-700 pt-4">
                <strong>Transferable Skills: </strong>team management, project
                management, excellent organizational skills, cross-cultural
                collaboration.
              </p>
            </div>
            <div className="bg-[#f8f8fa] rounded-lg shadow-sm p-4 mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Key Accounts Project Leader
              </h3>
              <p className="text-gray-700">RR Donnelley, 2013-2016</p>
              <ul className="text-gray-600 mt-3 list-disc list-inside">
                <li>
                  Led the onboarding process for new clients, establishing
                  collaboration frameworks and ensuring successful integration
                  into the company’s services.
                </li>
                <li>
                  Worked closely with internal departments and external partners
                  to ensure seamless project execution.
                </li>
                <li>Worked on improving production and delivery processes, optimizing shipment routes, and reducing lead times.</li>
              </ul>
              <p className="text-gray-700 pt-4">
                <strong>Transferable Skills: </strong>project management,
                product development and adaptation.
              </p>
            </div>
            <div className="bg-[#f8f8fa] rounded-lg shadow-sm p-4 mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Customer Service Specialist
              </h3>
              <p className="text-gray-700">RR Donnelley, 2008-2013</p>
              <ul className="text-gray-600 mt-3 list-disc list-inside">
                <li>
                  Provided comprehensive order management for Nokia, ensuring
                  compliance with high standards and coordinating with
                  production facilities across Europe.
                </li>
                <li>
                  Maintained regular communication with clients and production
                  sites, ensuring clear understanding of client requirements and
                  timely delivery of products.
                </li>
                <li>
                  Gained deep expertise in the ERP system designed for Nokia, collaborated on system enhancements, leveraging insights from daily use to suggest and implement improvements.
                </li>
              </ul>
              <p className="text-gray-700 pt-4">
                <strong>Transferable Skills: </strong>client relationship
                management, project coordination, working within complex ERP
                environments, quality assurance.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-gray-800 font-semibold text-2xl border-b-[1px] border-secondary mb-3 pb-2">
              Education
            </h2>
            <div className="bg-[#f8f8fa] rounded-lg shadow-sm p-4 mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Uniwersytet Ekonomiczny w Krakowie
              </h3>
              <p className="text-gray-700">Handel Zagraniczny, 2004-2008</p>
            </div>
            <div className="bg-[#f8f8fa] rounded-lg shadow-sm p-4 mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Uniwersytet Ekonomiczny w Krakowie
              </h3>
              <p className="text-gray-700">Handel Zagraniczny, 2004-2008</p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-gray-800 font-semibold text-2xl border-b-[1px] border-secondary mb-3 pb-2">
              Skills
            </h2>
            <ul className="text-gray-600 mt-3 list-disc list-inside">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section>
        </div>
      </div>

      {/* <div className="w-[100%] flex flex-col">
      <section className="flex  bg-secondary px-[20%]">
        <div className="flex-grow">
          <nav
            id="resume-nav"
            className="flex justify-center text-secondary-button-text font-thin italic py-8 m-0 scroll-mt-24"
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
              className="z-10 w-full h-full object-cover absolute top-0 left-0"
            />
            <div className="z-20 absolute bottom-20 left-8 text-secondary-button-text">
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

        <div className="w-[30%] max-w-[320px] flex flex-col gap-10 justify-end items-center text-secondary-button-text pb-12">
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
        className="w-[60%] mx-auto grid grid-cols-2 gap-8 scroll-mt-24"
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

    </div> */}
    </>
  );
}
