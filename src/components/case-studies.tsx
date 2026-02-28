import React from "react";
import CardGridView from "./card-grid";
import { caseStudies } from "@/utils/constants";

function CaseStudiesComponent() {
  return (
    <>
      <div className="text-2xl font-semibold text-center text-white">Case Studies</div>
      <CardGridView cards={caseStudies} />
    </>
  );
}

export default CaseStudiesComponent;
