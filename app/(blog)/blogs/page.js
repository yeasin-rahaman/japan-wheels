"use client";
import React, { useState, useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "@/app/Redux/store";
import BlogGrid from "@/app/components/blog/BlogGrid";
import BlogList from "@/app/components/blog/BlogList";

const Blogs = () => {
  const [selectedOption, setSelectedOption] = useState("grid");
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.japanwheels?.blogs);

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    setSelectedOption("grid");
  }, []);

  return (
    <>
      <section className="inner_page_breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content">
                <h2 className="breadcrumb_title">Blog</h2>
                <ol className="breadcrumb fn-sm">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a href="#">Blog List</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="blog_post_container inner_page_section_spacing text-right flex" style={{ paddingTop: '60px' }}>
        <div className="container row mx-auto" style={{ justifyContent: 'space-between' }}>
          <div className="search-box col-md-9">
            <input
              type="text"
              className="form-control w-75"
              placeholder="Search Your Desired Blogs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="d-flex col-md-3 my-auto" style={{ fontSize: '15px', justifyContent: 'end' }}>
            <div className="form-check text-right">
              <input
                type="radio"
                name="viewOption"
                id="gridView"
                value="grid"
                checked={selectedOption === 'grid'}
                onChange={handleRadioChange}
                style={{ display: 'none' }}
              />
              <label className="form-check-label cursor-pointer" style={{ cursor: 'pointer' }} htmlFor="gridView">
                <i className="fa-solid fa-grip-vertical fa-2xl" style={{ color: selectedOption === 'grid' && 'var(--primary-color)' }}></i>
              </label>
            </div>
            <div className="form-check text-right">
              <input
                type="radio"
                name="viewOption"
                id="listView"
                value="list"
                checked={selectedOption === 'list'}
                onChange={handleRadioChange}
                style={{ display: 'none' }}
              />
              <label className="form-check-label cursor-pointer" style={{ cursor: 'pointer' }} htmlFor="listView">
                <i className="fa-solid fa-bars fa-2xl" style={{ color: selectedOption === 'list' && 'var(--primary-color)' }}></i>
              </label>
            </div>
          </div>
        </div>
      </div>

      <Provider store={store}>
        <div className="wrapper">
          <section className="blog_post_container inner_page_section_spacing" style={{ paddingBottom: '60px' }}>
            <div className="container">
              <div className="row">
                {selectedOption === "grid" ? <BlogGrid /> : <div className="col-md-12"><BlogList /></div>}
              </div>
            </div>
          </section>
        </div>
      </Provider>
    </>
  );
};

export default Blogs;
