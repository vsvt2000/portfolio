/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import CardGridView from "./card-grid";
import { blogInfo } from "@/utils/blogs";

function BlogsComponent(props: any) {
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 
  return (
    <>
    <div className="text-2xl font-semibold text-center text-white">{blogInfo?.title}</div>
      <CardGridView cards={blogInfo?.items.reverse()} />
    </>
  );
}

export default BlogsComponent;


