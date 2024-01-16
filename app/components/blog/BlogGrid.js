"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "@/app/Redux/dataSlice";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const BlogGrid = () => {
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

  // Pagination Start

  const pages = [];

  // Handle page click
  const handleClick = (page) => {
    setCurrentPage(page);
  };

  // Calculate the range of pages to display (current page, previous 2, and next 2)
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
  // Handle First, Previous, Next, and Last buttons
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
          // role="button"
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
      <div className="row">
        {blogs?.data?.map((post) => (
          <div
            key={post.id}
            className="col-md-6 col-xl-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="for_blog">
              <div className="thumb">
                <Image
                  width={394}
                  height={254}
                  style={{ objectFit: "cover" }}
                  className="img-whp"
                  src={post.image}
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
                          20 Comments
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
                  <h4 className="title" style={{ minHeight: "80px" }}>
                    <Link href={`/blogs/${post?.id}`}>{post.title}</Link>
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
      </div>
      {/* Pagination */}
      <div className="row">
        <div className="col-lg-12">
          <div className="mbp_pagination mt20">
            <ul className="page_navigation">
              {/* <li role="button" className="page-item" onClick={handleFirst}>
                <span className="page-link">First</span>
              </li> */}
              <li className="page-item" onClick={handlePrevious}>
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

export default BlogGrid;
