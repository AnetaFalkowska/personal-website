import { projectData } from "../assets/data.ts";
import ProjectCard from "./ProjectCard.tsx";

export default function () {
  return (
    <div id="projects" className="w-[60%] mx-auto p-8 scroll-mt-24">
      <h1 className="text-4xl font-bold text-center mb-12">Portfolio</h1>
      <div className="flex flex-col gap-10">
        {projectData.map((project) => (
          <ProjectCard key={project.id} title={project.title} description={project.description} link={project.link} image={project.image} languages={project.languages}/>
        ))}
      </div>
    </div>
  );
}
