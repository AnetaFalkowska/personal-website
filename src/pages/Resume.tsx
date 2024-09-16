import ResumeSection from "../components/ResumeSection.js";
import { resumeData, skills, hobbies } from "../assets/data.js";
import Container from "../layouts/Container";
import Button from "../layouts/Button.js";


export default function Resume() {
  const { education, experience } = resumeData;
  const { technicalSkills, softSkills } = skills;

  return (
    <>

        <div className="w-full mb-10 bg-main-custom-pattern bg-cover bg-center text-center text-secondary-button-text pt-5 pb-10">
          <Container>
            <h1 className="font-bold text-3xl mb-2">Aneta Falkowska</h1>
            <h4 className="text-xl">React Developer</h4>
            <p className="text-sm mt-1">
              aneta.falkowska@gmail.com | (+48) 502 394 679
            </p>
            <Button className="mx-auto w-48 my-6" variant="inverse" href="/files/Aneta_Falkowska_CV_en.pdf" download="Aneta_Falkowska_CV_en.pdf">
              Download CV
            </Button>
          </Container>
        </div>


        <div>
          <h2 className="text-gray-800 text-center font-semibold text-2xl p-4 shadow-md">
            EXPERIENCE
          </h2>

          <Container>
            <div className="relative py-10">
              <div className="absolute left-[5%] sm:left-[50%] transform -translate-x-[50%] translate-y-[8px] w-0.5 bg-gray-300 h-[90%] "></div>
              {experience.map((el, index) => (
                <ResumeSection key={index} {...el} />
              ))}
            </div>
          </Container>
        </div>
        <div className="bg-secondary-section">
          <h2 className="text-gray-800 text-center font-semibold text-2xl p-4 shadow-md">
            EDUCATION
          </h2>

          <Container>
            <div className="relative py-10">
              <div className="absolute left-[5%] sm:left-[50%] transform -translate-x-[50%] translate-y-[8px] w-0.5 bg-gray-300 h-[80%] "></div>
              {education.map((el, index) => (
                <ResumeSection key={index} {...el} />
              ))}
            </div>
          </Container>
        </div>
        <div className="bg-secondary-dark text-secondary-button-text">
          <h2 className="text-center font-semibold text-2xl p-4 shadow-md">
            TECHNICAL <span className="mx-2">&</span> SOFT SKILLS
          </h2>

          <Container>
            <div className="md:flex md:justify-evenly gap-8 py-10 mx-auto md:mx-0 w-fit md:w-auto">
              <div className="p-6">
                <ul className="list-disc list-inside space-y-2 text-left">
                  {technicalSkills.map((el, index) => (
                    <li key={index}>
                      <span className="font-semibold ">{el.title}</span> -{" "}
                      {el.level}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="block md:hidden h-0.5 bg-secondary-button-text w-[15%] ml-6 my-3"></div>
              <div className="p-6">
                <ul className="list-disc list-inside space-y-2 text-left">
                  {softSkills.map((el, index) => (
                    <li key={index}>{el}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </div>

        <div>
          <h2 className="text-gray-800 text-center font-semibold text-2xl p-4 shadow-md">
            HOBBIES
          </h2>
          <Container>
            <div className="py-16 py-10 flex flex-wrap justify-evenly gap-10">
              {hobbies.map((el, index) => (
                <div key={index}>
                  <div className="size-20 rounded-full bg-secondary-light p-5">
                    <img src={el.icon} />
                  </div>

                  <p className="text-gray-600 mt-5 text-center">{el.name}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
        <div className="bg-secondary-section">
          <h2 className="text-gray-800 text-center font-semibold text-2xl p-4 shadow-md">
            QUICK ID
          </h2>
          <Container>
            <div className="p-10 flex justify-center gap-1 sm:gap-5 text-sm sm:text-base">
              <div className="font-bold space-y-2">
                <p>Phone</p>
                <p>Email</p>
                <p>Github</p>
              </div>
              <div className="space-y-2">
                <p className="ml-4">502 394 679</p>

                <p className="ml-4">aneta.falkowska@gmail.com</p>

                <p className="ml-4">https://github.com/AnetaFalkowska</p>
              </div>
            </div>
          </Container>
        </div>

    </>
  );
}
