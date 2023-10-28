"use client";
import { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(7);
  const totalPages = 40;
  const pages = [];

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  // Calculate the range of pages to display (current page, previous 2, and next 2)
  const pageRange = Array.from({ length: 5 }, (_, index) => {
    const pageIndex = currentPage - 2 + index;
    return pageIndex >= 1 && pageIndex <= totalPages ? pageIndex : null;
  });

  // Handle First, Previous, Next, and Last buttons
  const handleFirst = () => setCurrentPage(1);
  const handlePrevious = () => setCurrentPage(currentPage - 1);
  const handleNext = () => setCurrentPage(currentPage + 1);
  const handleLast = () => setCurrentPage(totalPages);

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
  );
};

export default Pagination;
