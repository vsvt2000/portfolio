import BlogsComponent from "@/components/blogs";
import Header from "@/components/header";
import { geistMono, geistSans } from "@/utils/fonts";
import React from "react";

function BlogsPage() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} space-y-8`}>
      <Header />
      <div className="p-6 space-y-8">
        <BlogsComponent />
      </div>
    </div>
  );
}

export default BlogsPage;
