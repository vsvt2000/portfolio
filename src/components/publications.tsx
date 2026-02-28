import React from "react";
import CardGridView from "./card-grid";
import { publications } from "@/utils/constants";

function PublicationsComponent() {
  return (
    <>
      <div className="text-2xl font-semibold text-center text-white">Publications</div>
      <CardGridView cards={publications} />
    </>
  );
}

export default PublicationsComponent;
