import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../layouts/Button";

type KeyFeature = {
  name: string;
  description: string;
};

type ProjectCardProps = {
  imgDesktop: string;
  imgTablet: string;
  imgMobile: string;
  title: string;
  description: string;
  techStack: string[];
  keyFeatures: KeyFeature[];
  git: string;
  link: string;
};

export default function ProjectCard({
  imgDesktop,
  imgTablet,
  imgMobile,
  title,
  description,
  techStack,
  keyFeatures,
  git,
  link,
  
}: ProjectCardProps) {
  return (
    <>   
      <div className="relative md:w-[90%] mx-auto bg-secondary-section border-t-4 border-secondary mb-14 p-6 pt-16 rounded-lg shadow-md flex flex-col lg:flex-row items-start">
        <div className="relative w-auto lg:w-1/2 mb-4 lg:mb-0 lg:mr-8">
          <a
            href={link}
            className="inline-block w-[80%] lg:w-full rounded-md sm:rounded-lg lg:rounded-xl desktop-shadow z-5 transition-all duration-300 ease-in-out hover:scale-105 hover:desktop-shadow-hover active:scale-95"
          >
              <img
              src={imgDesktop}
              alt={`${title} screenshot`}
              className="rounded-md sm:rounded-lg lg:rounded-xl object-cover"
            />
          </a>

          <a
            href={link}
            className="absolute overflow-hidden w-[20%] lg:w-[25%] rounded-md sm:rounded-lg lg:rounded-xl top-[50%] -translate-y-[50%] right-0 -translate-x-[30%] lg:top-[115%] lg:translate-y-0 lg:right-[14%] lg:-translate-x-0 mobile-shadow z-20 transition-all duration-300 ease-in-out hover:scale-105 hover:mobile-shadow-hover active:scale-95"
          >
            <img
              src={imgMobile}
              alt={`${title} screenshot`}
              className="rounded-md sm:rounded-lg lg:rounded-xl object-cover"
            />
          </a>
          <a
            href={link}
            className="hidden lg:inline-block absolute overflow-hidden w-[50%] rounded-xl top-[88%] left-[14%] tablet-shadow z-10 transition-all duration-300 ease-in-out hover:scale-105 hover:tablet-shadow-hover active:scale-95"
          >
            <img
              src={imgTablet}
              alt={`${title} screenshot`}
              className="rounded-xl object-cover"
            />
          </a>
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>

          <h4 className="text-lg font-semibold text-gray-700">Tech Stack</h4>
          <ul className="flex flex-wrap gap-2 mb-8">
            {techStack.map((el, index) => (
              <li
                key={index}
                className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-800"
              >
                {el}
              </li>
            ))}
          </ul>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
          Development Insights
          </h4>
          <ul className="list-disc list-inside text-gray-600 mb-8">
            {keyFeatures.map((el, index) => (
              <li className="mb-2" key={index}>
                <strong>{el.name}: </strong>
                {el.description}
              </li>
            ))}
          </ul>
          {/* <a
            href="https://github.com/your-repo"
            className="text-secondary font-bold mb-4 block"
          >
            View on GitHub →
          </a>
          <a href={link} className="text-secondary font-bold mb-4 block">
            Visit Project →
          </a> */}
          <a
            href={git}
            className={twMerge(
              buttonStyles({ variant: "outline" }),
              "mb-4 mr-auto w-52"
            )}
          >
            View on GitHub
          </a>
          <a
            href={link}
            className={twMerge(
              buttonStyles(),
              "mb-4 mr-auto w-52"
            )}
          >
            Visit Project
          </a>

        </div>
        <div className="absolute top-0 right-0 size-8 md:size-12 bg-secondary rounded-bl-lg"></div>
      </div>
    </>
  );
}
