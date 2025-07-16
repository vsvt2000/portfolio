import Header from "@/components/header";
import PublicationsComponent from "@/components/publications";
import { geistMono, geistSans } from "@/utils/fonts";
import React from "react";

function PublicationsPage() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} space-y-8`}>
      <Header />
      <div className="p-6 space-y-8">
        <PublicationsComponent />
      </div>
    </div>
  );
}

export default PublicationsPage;
