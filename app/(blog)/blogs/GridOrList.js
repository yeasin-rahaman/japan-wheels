import BlogGrid from '@/app/components/blog/BlogGrid';
import BlogList from '@/app/components/blog/BlogList';
import Pagination from '@/app/components/blog/Pagination';
import Sidebar from '@/app/components/blog/Sidebar';
import React from 'react'; // Import necessary modules and dependencies

const GridOrList = ({ show }) => { // Destructure 'show' prop

  return (
    <section className="blog_post_container inner_page_section_spacing">
      <div className="container">
        <div className="row">
          {show === "grid" ? ( // Use curly braces for JavaScript expressions
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

      <div className="row">
        <div className="col-lg-12">
          <div className="mbp_pagination mt20">
            <Pagination /> {/* Assuming Pagination is a valid component */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridOrList;
