import Header from "@/components/header";
import ProjectsComponent from "@/components/projects";
import { geistMono, geistSans } from "@/utils/fonts";
import React from "react";

function ProjectsPage() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} space-y-8`}>
      <Header />
      <div className="p-6 space-y-8">
        <ProjectsComponent />
      </div>
    </div>
  );
}

export default ProjectsPage;
