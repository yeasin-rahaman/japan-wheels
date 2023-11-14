"use client";
import Footer from "@/app/components/common/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import HeaderTop from "@/app/components/common/HeaderTop";
import MobileMenu from "@/app/components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import Image from "next/image";
import Blog from "@/app/components/common/Blog";
import Meta from "@/app/components/blog/blog-single/Meta";
import Blockquote from "@/app/components/blog/blog-single/Blockquote";
import Features from "@/app/components/blog/blog-single/Features";
import Requirements from "@/app/components/blog/blog-single/Requirements";
import Share from "@/app/components/blog/blog-single/Share";
import Tag from "@/app/components/blog/blog-single/Tag";
import Pagination from "@/app/components/blog/blog-single/Pagination";
import Comments from "@/app/components/blog/blog-single/Comments";
import CommentForm from "@/app/components/blog/blog-single/CommentForm";
import AddBlog from "./AddBlog";
import PageNotFound from "@/utils/PageNotFound";

const metadata = {
  title:
    "Blog Dynamic Single || Voiture - Automotive & Car Dealer NextJS Template",
};

const BlogDynamicSingle = () => {
  const Authorization= localStorage.getItem("jwt_access_token");

  return (
    <div className="wrapper pb-80 pt-80">
    {
      Authorization ?  <AddBlog /> : <PageNotFound/>
    }


    
    </div>
    // End wrapper
  );
};

export default BlogDynamicSingle;
