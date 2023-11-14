"use client";
import AddBlog from "./AddBlog";
import PageNotFound from "@/utils/PageNotFound";
import { useSelector } from "react-redux";

const metadata = {
  title:
    "Blog Dynamic Single || Voiture - Automotive & Car Dealer NextJS Template",
};

const BlogDynamicSingle = () => {
  // const Authorization = localStorage.getItem("jwt_access_token");

  const user = useSelector((state) => state.japanwheels?.userInfo);
  return (
    <div className="wrapper pb-80 pt-80">
      {/* {
        Authorization ? <AddBlog /> : <PageNotFound />
      } */}

      {
        user.id ? <AddBlog /> : <PageNotFound />
      }


    </div>
    // End wrapper
  );
};

export default BlogDynamicSingle;
