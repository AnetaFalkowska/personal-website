import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../layouts/Button";

type KeyFeature = {
  name: string;
  description: string;
};

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  keyFeatures: KeyFeature[];
  link: string;
};

export default function ProjectCard({
  image,
  title,
  description,
  techStack,
  keyFeatures,
  link,
}: ProjectCardProps) {
  return (
    <>   
      <div className="relative md:w-[90%] mx-auto bg-secondary-section border-t-4 border-secondary mb-14 p-6 pt-16 rounded-lg shadow-md flex flex-col lg:flex-row items-start">
        <div className="relative w-auto lg:w-1/2 mb-4 lg:mb-0 lg:mr-8">
          <a
            href="#projects"
            className="inline-block w-[80%] lg:w-full rounded-2xl shadow-[-3px_3px_3px_rgba(0,0,0,0.3)] z-5 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[-6px_6px_6px_rgba(0,0,0,0.3)] active:scale-95"
          >
              <img
              src={image}
              alt={`${title} screenshot`}
              className="rounded-2xl object-cover"
            />
          </a>

          <a
            href="#projects"
            className="absolute overflow-hidden w-[20%] lg:w-[25%] rounded-2xl top-[50%] -translate-y-[50%] right-0 -translate-x-[30%] lg:top-[115%] lg:translate-y-0 lg:right-[14%] lg:-translate-x-0 shadow-[-20px_20px_20px_rgba(0,0,0,0.3)] z-20 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[-25px_25px_25px_rgba(0,0,0,0.3)] active:scale-95"
          >
            <img
              src="/Small.PNG"
              alt={`${title} screenshot`}
              className="rounded-2xl object-cover"
            />
          </a>
          <a
            href="#projects"
            className="hidden lg:inline-block absolute overflow-hidden w-[50%] rounded-2xl top-[88%] left-[14%] shadow-[-9px_9px_9px_rgba(0,0,0,0.3)] z-10 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[-13px_13px_13px_rgba(0,0,0,0.3)] active:scale-95"
          >
            <img
              src="/tablet.PNG"
              alt={`${title} screenshot`}
              className="rounded-2xl object-cover"
            />
          </a>
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
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
            Key Features
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
            href="#projects"
            className={twMerge(
              buttonStyles({ variant: "outline" }),
              "mb-4 mr-auto w-52"
            )}
          >
            View on GitHub
          </a>
          <a
            href="#projects"
            className={twMerge(
              buttonStyles(),
              "mb-4 mr-auto w-52"
            )}
          >
            Visit Project
          </a>

        </div>
        <div className="absolute top-0 right-0 w-12 h-12 bg-secondary rounded-bl-lg"></div>
      </div>
    </>
  );
}
