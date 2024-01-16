"use client";

// Import necessary modules and components
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "@/app/Redux/dataSlice";
import blogPosts from "@/data/blog";
import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";
import moment from "moment";

// Define the BlogList component
const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.japanwheels?.blogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch blogs when the currentPage changes
  useEffect(() => {
    dispatch(getBlogs(currentPage));
  }, [dispatch, currentPage]);

  // Update totalPages when the blogs data changes
  useEffect(() => {
    setTotalPages(blogs?.total_pages);
  }, [blogs]);

  // Define pagination variables and functions
  const pages = [];
  const pageRange = Array.from({ length: 3 }, (_, index) => {
    let pagePositionMath = 0;
    if (currentPage == 1) {
      pagePositionMath = 0;
    } else {
      pagePositionMath = 1;
    }
    const pageIndex = currentPage - pagePositionMath + index;

    return pageIndex >= 1 && pageIndex <= totalPages ? pageIndex : null;
  });

  const handleClick = (page) => {
    setCurrentPage(page);
  };
  const handleFirst = () => setCurrentPage(1);
  const handlePrevious = () => setCurrentPage(currentPage - 1);
  const handleNext = () => setCurrentPage(currentPage + 1);
  const handleLast = () => setCurrentPage(totalPages);

  // Create the page buttons for pagination
  for (const page of pageRange) {
    if (page === null) {
      pages.push(
        <li key={`ellipsis-${pages.length}`} className="page-item disabled">
          <span className="page-link">...</span>
        </li>
      );
    } else {
      pages.push(
        <li
          role="button"
          key={page}
          className={`page-item ${page === currentPage ? "active" : ""}`}
          onClick={() => handleClick(page)}
        >
          <span className="page-link">{page}</span>
        </li>
      );
    }
  }

  return (
    <>
      {/* Map through the blog data and display each blog post */}
      {blogs?.data?.map((post) => (
        <div key={post.id} className="main_blog_post_content row col-md-10 mx-auto">
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
                  <Link href={`/blogs/${post?.id}`}>{post?.title}</Link>
                </h4>
                <Link href={`/blogs/${post?.id}`} className="more_listing">
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
            <ul className="page_navigation">
              {/* <li role="button" className="page-item" onClick={handleFirst}>
                <span className="page-link">First</span>
              </li> */}
              <li role="button" className="page-item" onClick={handlePrevious}>
                <span className="fa fa-arrow-left" />
              </li>
              {pages}
              <li role="button" className="page-item" onClick={handleNext}>
                <span className="fa fa-arrow-right" />
              </li>
              {/* <li role="button" className="page-item" onClick={handleLast}>
                <span className="page-link">Last</span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
