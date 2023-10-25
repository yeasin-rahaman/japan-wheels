"use client";
import { getBlogs } from "@/app/Redux/dataSlice";
import blogPosts from "@/data/blog";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import moment from "moment";

const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.japanwheels?.blogs);
  console.log(`blogs`, blogs);
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  return (
    <>
      {blogs?.map((post) => (
        <div key={post.id} className="main_blog_post_content">
          <div className="for_blog list-type">
            <div className="thumb">
              <div className="tag">{post?.tag}</div>
              <Image
                width={394}
                height={251}
                style={{ objectFit: "cover" }}
                className="img-whp"
                src={post?.image}
                alt={post.title}
              />
            </div>
            <div className="details">
              <div className="wrapper">
                <div className="bp_meta">
                  <ul>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-user" />
                        {post?.created_by?.name}
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-chat" />
                        {post?.numComments} Comments
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-calendar-1" />
                        {moment(post?.created_at).format("ll")}
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className="title">
                  <Link href={`/blog-details/${post?.id}`}>{post?.title}</Link>
                </h4>
                <Link href={`/blog-details/${post?.id}`} className="more_listing">
                  Read More{" "}
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
           <div className="row">
        <div className="col-lg-12">
          <div className="mbp_pagination mt20">
            <Pagination /> {/* Assuming Pagination is a valid component */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
