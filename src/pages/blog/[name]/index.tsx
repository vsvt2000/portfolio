import { htmlBlogInfo } from "@/utils/blogs";
import React from "react";
import { useRouter } from "next/router";
import Header from "@/components/header";
import { geistMono, geistSans } from "@/utils/fonts";

function BlogHomePage() {
  const router = useRouter();

  const name =
    (router?.query?.name as unknown as string) || "market_segmentation";
  const fileName = htmlBlogInfo[name];
  return (
    <div className={`${geistSans.className} ${geistMono.className}`}>
      <Header />
      <div className="w-full h-full overflow-hidden">
        <iframe
          src={`/html_content/${fileName}.html`}
          className="w-full h-screen border-0"
        />
      </div>
    </div>
  );
}

export default BlogHomePage;
