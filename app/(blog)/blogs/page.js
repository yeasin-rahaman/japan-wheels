"use client";
import Footer from "@/app/components/common/Footer";
import DefaultHeader from "../../components/common/DefaultHeader";
import HeaderSidebar from "../../components/common/HeaderSidebar";
import HeaderTop from "../../components/common/HeaderTop";
import MobileMenu from "../../components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import BlogGrid from "@/app/components/blog/BlogGrid";
import Pagination from "@/app/components/blog/Pagination";
import { Provider, useDispatch, useSelector } from "react-redux/es";
import { store } from "@/app/Redux/store";
import { useEffect, useState } from "react";
import BlogList from "@/app/components/blog/BlogList";
import Sidebar from "@/app/components/blog/Sidebar";

// export const metadata = {
//   title: "Blog Grid || Voiture - Automotive & Car Dealer NextJS Template",
// };

const Blogs = () => {
  const [selectedOption, setSelectedOption] = useState("grid");
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.japanwheels?.blogs);
  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };
  useEffect(() => {
    setSelectedOption("grid")
  }, []);
  return (
    <>
   <section className="blog_post_container inner_page_section_spacing text-right">
        <div className="container d-flex text-right justify-content-right">
          <div className="form-check mx-5">
            <input
              className="form-check-input"
              type="radio"
              name="viewOption"
              id="gridView"
              value="grid"
              checked={selectedOption === "grid"}
              onChange={handleRadioChange}
            />
            <label className="form-check-label" htmlFor="gridView">
              Grid View
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="viewOption"
              id="listView"
              value="list"
              checked={selectedOption === "list"}
              onChange={handleRadioChange}
            />
            <label className="form-check-label" htmlFor="listView">
              List View
            </label>
          </div>
        </div>
      </section>
    <Provider store={store}>
      {" "}
      <div className="wrapper">

    
     
    <section className="blog_post_container inner_page_section_spacing">
      <div className="container">
        <div className="row">
          {selectedOption === "grid" ? ( // Use curly braces for JavaScript expressions
            <BlogGrid /> 
          ) : (
            <div className="col-lg-8 col-xl-9">
              <BlogList /> {/* Assuming BlogList is a valid component */}
            </div>
          )}
          {/* End .col-8 */}

       
          {/* End .col-4 */}
        </div>
        {/* End .row */}
      </div>
    </section>    

      </div>
    </Provider>
    </>

    // End wrapper
  );
};

export default Blogs;
