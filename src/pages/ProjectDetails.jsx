import { useParams } from "react-router-dom";
import projectsData from "../assets/Projects/projects.json";
import { Helmet } from "react-helmet-async";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((proj) => proj.id === id);

  if (!project) {
    return <div className="text-center py-16">Project not found.</div>;
  }

  return (
    <div className="p-4">
      <Helmet>
        <title>Rayhan Sohel - Project - {project.title} </title>
      </Helmet>
      <div className="container mx-auto max-w-7xl space-y-6 py-6 md:py-16">
        <div className="flex flex-col gap-8 items-center max-w-3xl mx-auto">

          
          {/* Project Image */}
          <div className="w-full">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-3xl w-full"
            />
          </div>
          <div className="w-full">
            {/* Project Info */}
            <div className="space-y-4 w-full">
              <h1 className="text-4xl pl-6 font-bold uppercase text-accent">
                {project.title}
              </h1>
              <p className="opacity-80 pl-6">{project.description}</p>

              {/* TechStack,Challenges and Improvements */}
              <div className="space-y-4 bg-base-200 rounded-3xl p-6">
                <div>
                  <h2 className="text-xl font-semibold">Tech Stack</h2>
                  <ul className="list-disc list-inside opacity-70">
                    {project.techStack.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
                  <ul className="list-disc list-inside opacity-70">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Improvements</h2>
                  <ul className="list-disc list-inside opacity-70">
                    {project.improvements.map((improvement, index) => (
                      <li key={index}>{improvement}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-accent"
                >
                  View Live Project
                </a>
                {project.githubLink !== "Not Available" && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-secondary"
                  >
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
