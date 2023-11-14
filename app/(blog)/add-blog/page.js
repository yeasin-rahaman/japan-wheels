"use client";
import { useState } from "react";
import AddBlog from "./AddBlog";
import PageNotFound from "@/utils/PageNotFound";

const metadata = {
  title:
    "Blog Dynamic Single || Voiture - Automotive & Car Dealer NextJS Template",
};

const BlogDynamicSingle = () => {
  // const Authorization = localStorage.getItem("jwt_access_token");

  return (
    <div className="wrapper pb-80 pt-80">
      {/* {
        Authorization ? <AddBlog /> : <PageNotFound />
      } */}

      <AddBlog />

    </div>
    // End wrapper
  );
};

export default BlogDynamicSingle;
