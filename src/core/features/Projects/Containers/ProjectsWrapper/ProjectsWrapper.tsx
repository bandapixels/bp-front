import React from "react";
import Project from "../Project/Project";
import constants from "../../../../shared/constants";

const ProjectsWrapper: React.FunctionComponent = () => {
  const projectsInfo = constants.projects;

  return (
    <>
      {projectsInfo.map((project, index: number) => (
        <Project
          title={project.title}
          description={project.description}
          footerTitle={project.footerTitle}
          footerDescription={project.footerDescription}
          key={project.title}
          video={project.video}
          url={project.url}
          orientation={project.orientation}
          position={project.position}
          isFirst={index === 0}
          projectIndex={index}
        />
      ))}
    </>
  );
};

export default ProjectsWrapper;
