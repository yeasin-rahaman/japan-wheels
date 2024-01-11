import React from 'react';
import ListGridFilter2 from './ListGridFilter2';
import SidebarAdvnaceFilter from './SidebarAdvanceFilter';
import CarItems from './CarItems';

const Listings = ({ listingCars, listName, totalListing, routeLink }) => {

    console.log(listingCars);
    return (
        <div className="wrapper">
            {/* Inner Page Breadcrumb  */}
            <section className="inner_page_breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb_content">
                                <h2 className="breadcrumb_title">Used Vehicles For Sale</h2>
                                <p className="subtitle">{listName}</p>
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
                        {
                            listingCars?.length !== 0 ?

                                <div className="col-lg-8 col-xl-9">
                                    <ListGridFilter2
                                        totalListing={totalListing}
                                    />

                                    <div className="row">
                                        <CarItems
                                            listingCars={listingCars}
                                            listName={listName}
                                            routeLink={routeLink}
                                            totalListing={totalListing}
                                        />
                                    </div>
                                    {/* End .row */}
                                </div>
                                :
                                <></>

                        }
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

export default Listings;