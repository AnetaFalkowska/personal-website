import { projectData } from "../assets/data.ts";
import ProjectCard from "./ProjectCard.tsx";
import Container from "./../layouts/Container.tsx"

export default function () {
  return (
    <Container maxWidth="max-w-[1100px]">
      <div
    id="projects"
    className="mb-28 scroll-mt-24"
  >
    
    <h1 className="text-4xl font-bold text-center py-10 mb-12">
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
