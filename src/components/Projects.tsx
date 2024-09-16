import { projectData } from "../assets/data.ts";
import ProjectCard from "./ProjectCard.tsx";
import Container from "./../layouts/Container.tsx"

export default function () {
  return (
    <Container maxWidth="max-w-[1100px]">
      <div
    id="projects"
    className="mb-10 sm:mb-28 scroll-mt-12"
  >
    
    <h1 className="text-gray-800 text-center font-semibold text-3xl py-2 sm:py-10 mb-12">
      My Projects
    </h1>
    <div>
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
  </div></Container>
    
  );
}
