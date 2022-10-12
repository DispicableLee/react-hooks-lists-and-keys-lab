import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ProjectItem
        name = {projects.name}
        about = {projects.about}
        technologies = {projects.technologies}
        />
      </div>
    </div>
  );
}

export default ProjectList;
