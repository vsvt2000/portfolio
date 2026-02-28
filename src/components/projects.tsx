import React from "react";
import CardGridView from "./card-grid";
import { projects } from "@/utils/constants";

function ProjectsComponent() {
  return (
    <>
    <div className="text-2xl font-semibold text-center text-white">Projects</div>
      <CardGridView cards={projects} />
    </>
  );
}

export default ProjectsComponent;
