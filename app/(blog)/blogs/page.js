"use client";
import Footer from "@/app/components/common/Footer";
import DefaultHeader from "../../components/common/DefaultHeader";
import HeaderSidebar from "../../components/common/HeaderSidebar";
import HeaderTop from "../../components/common/HeaderTop";
import MobileMenu from "../../components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import BlogGrid from "@/app/components/blog/BlogGrid";
import Pagination from "@/app/components/blog/Pagination";
import { Provider } from "react-redux/es";
import { store } from "@/app/Redux/store";
import { useEffect, useState } from "react";
import BlogList from "@/app/components/blog/BlogList";
import Sidebar from "@/app/components/blog/Sidebar";

// export const metadata = {
//   title: "Blog Grid || Voiture - Automotive & Car Dealer NextJS Template",
// };

const Blogs = () => {
  const [gridOrList, setGridOrList] = useState("grid");
  const [selectedOption, setSelectedOption] = useState("grid");

  console.log(`gridOrList`, gridOrList);
  const handleRadioChange = (e) => {
    setGridOrList(e.target.value);
  };
  useEffect(() => {
    setSelectedOption(gridOrList);
  }, []);
  return (
    <Provider store={store}>
      {" "}
      <div className="wrapper">
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <HeaderSidebar />
        </div>
        {/* Sidebar Panel End */}

        {/* header top */}
        <HeaderTop />
        {/* End header top */}

        {/* Main Header Nav */}
        <DefaultHeader />
        {/* End Main Header Nav */}

        {/* Main Header Nav For Mobile */}
        <MobileMenu />
        {/* End Main Header Nav For Mobile */}

        {/* Inner Page Breadcrumb */}
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
                      <a href="#">Blog</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Inner Page Breadcrumb */}

        <section className="blog_post_container inner_page_section_spacing text-right">
          <div className="container d-flex text-right justify-content-right">
            <div className="form-check mx-5">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="grid"
                checked={selectedOption === "grid"}
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Grid View
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="list"
                checked={selectedOption === "list"}
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                List View
              </label>
            </div>
          </div>
        </section>
        {/* <!-- Main Blog Post Content --> */}
        {gridOrList === "grid" ? (
          <section className="blog_post_container inner_page_section_spacing">
            <div className="container">
              <div className="row">
                <BlogGrid />
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="mbp_pagination mt20">
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="blog_post_container inner_page_section_spacing">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-xl-9">
                  <BlogList />
                </div>
                {/* End .col-8 */}

                <div className="col-lg-4 col-xl-3">
                  <Sidebar />
                </div>
                {/* End .col-4 */}
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="mbp_pagination mt20">
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* <!-- Main Blog Post Content --> */}

        {/* Our Footer */}
        <Footer />
        {/* End Our Footer */}

        {/* Modal */}
        <div
          className="sign_up_modal modal fade"
          id="logInModal"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex={-1}
          aria-hidden="true"
        >
          <LoginSignupModal />
        </div>
        {/* End Modal */}
      </div>
    </Provider>

    // End wrapper
  );
};

export default Blogs;
