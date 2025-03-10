import { GoNorthStar } from "react-icons/go";
import { Link } from "react-router-dom";
import projectsData from "../assets/Projects/projects.json";

const ProjectsSection = () => {
  return (
    <div id="projects" className="p-4">
      <div className="space-y-6 w-full container mx-auto max-w-7xl items-center pb-6 md:pb-16">
        <div className="w-full text-center flex items-center flex-col">
          <h3 className="uppercase opacity-70">My Projects</h3>
          <div className="flex items-center justify-center w-full gap-4 mt-2">
            <GoNorthStar className="text-xl text-accent" />
            <h1 className="text-4xl uppercase mb-2">Featured Work</h1>
            <GoNorthStar className="text-xl text-accent" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-base-200 rounded-3xl p-6 hover:shadow-xl transition-all">
              <img src={project.image} alt={project.title} className="rounded-xl mb-4 max-h-[300px] w-full object-cover" />
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="opacity-70 mb-4">{project.description}</p>
              <Link to={`/project/${project.id}`} className="btn btn-sm btn-primary">
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;


