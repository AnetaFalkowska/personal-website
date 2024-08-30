import { projectData } from "../assets/data.ts";
import ProjectCard from "./ProjectCard.tsx";

export default function () {
  return (
    <div
      id="projects"
      className="max-w-[1100px] w-[90%] mx-auto mb-28 p-8 scroll-mt-24"
    >
      <h1 className="text-4xl font-bold text-center py-10 mb-12">
        My Projects
      </h1>
      <div className="flex flex-col gap-20">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
            techStack={project.techStack}
            keyFeatures={project.keyFeatures}
          />
        ))}
      </div>
    </div>
  );
}
