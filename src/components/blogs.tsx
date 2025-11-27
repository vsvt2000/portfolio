/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import CardGridView from "./card-grid";
import { blogInfo } from "@/utils/blogs";

function BlogsComponent(props: any) {
  console.log("posts here", props?.posts,props);
  return (
    <>
    <div className="text-2xl font-semibold text-center">{blogInfo?.title}</div>
      <CardGridView cards={blogInfo?.items.reverse()} />
    </>
  );
}

export default BlogsComponent;


