import CaseStudiesComponent from "@/components/case-studies";
import Header from "@/components/header";
import { geistMono, geistSans } from "@/utils/fonts";
import React from "react";

function CaseStudiesPage() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} space-y-8`}>
      <Header />
      <div className="p-6 space-y-8">
        <CaseStudiesComponent />
      </div>
    </div>
  );
}

export default CaseStudiesPage;
