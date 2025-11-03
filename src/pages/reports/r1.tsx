import React from "react";
import Header from "@/components/header";
import { geistMono, geistSans } from "@/utils/fonts";
import ReportComponent1 from "@/components/reports/report1";

function Report1() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} space-y-8`}>
      <Header />
      <div className="p-6 space-y-8">
        <ReportComponent1 />
      </div>
    </div>
  );
}

export default Report1;
