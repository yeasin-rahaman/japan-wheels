"use client";
import AddBlog from "./AddBlog";
import PageNotFound from "@/utils/PageNotFound";

const metadata = {
  title:
    "Blog Dynamic Single || Voiture - Automotive & Car Dealer NextJS Template",
};

const BlogDynamicSingle = () => {


  if (typeof window !== 'undefined') {
    const Authorization = localStorage.getItem("jwt_access_token");
    const item = localStorage.getItem('key')
  }


  return (
    <div className="wrapper pb-80 pt-80">
      {
        Authorization ? <AddBlog /> : <PageNotFound />
      }



    </div>
    // End wrapper
  );
};

export default BlogDynamicSingle;
