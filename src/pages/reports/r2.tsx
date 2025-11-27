import React from "react";
import Header from "@/components/header";
import { geistMono, geistSans } from "@/utils/fonts";
import ReportComponent2 from "@/components/reports/report2";

function Report2() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} space-y-8`}>
      <Header />
      <div className="p-6 space-y-8">
        <ReportComponent2 />
      </div>
    </div>
  );
}

export default Report2;
