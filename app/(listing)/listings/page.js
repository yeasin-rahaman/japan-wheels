"use client"
import CarItems from "@/app/OurComponents/listing/CarItems";
import SidebarAdvnaceFilter from "@/app/OurComponents/listing/SidebarAdvanceFilter";
import ListGridFilter2 from "@/app/OurComponents/listing/ListGridFilter2";
import { useEffect, useState } from "react";




const ListingV3 = () => {


  const [listingCars, setListingCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.japanwheels.com/api/vehicles');
        const data = await response.json();
        setListingCars(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once on component mount
  console.log(listingCars.length);
  return (
    <div className="wrapper">
      {/* Inner Page Breadcrumb */}
      <section className="inner_page_breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content">
                <h2 className="breadcrumb_title">Used Vehicles For Sale</h2>
                <p className="subtitle">Listings v6</p>
                <ol className="breadcrumb fn-767 mt10-sm">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a href="#">Listing v6</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Inner Page Breadcrumb */}

      {/* Listing Grid View */}
      <section className="our-listing bgc-white pb30-991 inner_page_section_spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 dn-md">
              <SidebarAdvnaceFilter />
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-8 col-xl-9">
              <ListGridFilter2
                listingCars={listingCars.length}
              />

              <div className="row">
                <CarItems
                  listingCars={listingCars}
                />
              </div>
              {/* End .row */}
            </div>
            {/* End .col-lg-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="advanceSearchMobile"
          aria-labelledby="advanceSearchMobileLabel"
        >
          <div
            className="mb-cls-btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa-light fa-circle-xmark"></i>
          </div>
          <SidebarAdvnaceFilter />
        </div>
      </section>
      {/* Listing Grid View */}
    </div>
    // End wrapper
  );
};

export default ListingV3;
