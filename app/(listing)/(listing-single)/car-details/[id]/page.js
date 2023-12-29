import BreadCrumb from "@/app/components/listing/listing-single/BreadCrumb";
import ProductGallery from "@/app/OurComponents/listing/ProductGallery";
import Overview from "@/app/components/listing/listing-single/Overview";
import Descriptions from "@/app/components/listing/listing-single/Descriptions";
import Features from "@/app/components/listing/listing-single/Features";
import Link from "next/link";
import SellerDetail2 from "@/app/components/listing/listing-single/sidebar/SellerDetail2";
import Map from "@/app/components/common/Map";
import ShareMeta from "@/app/components/listing/listing-single/ShareMeta";

export const metadata = {
  title:
    "Listing Single V3 || Voiture - Automotive & Car Dealer NextJS Template",
};

const ListingSingleV3 = () => {
  return (
    <div className="wrapper">



      {/* Agent Single Grid View */}
      <section className="our-agent-single bgc-f9 pb90 mt70-992 pt30">
        <div className="container">
          <div className="row mb30">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <BreadCrumb />
              </div>
            </div>
          </div>
          {/* End .row bradcrumb */}

          <div className="row mb30">
            <div className="col-lg-7 col-xl-8">
              <div className="single_page_heading_content">
                <div className="car_single_content_wrapper">
                  <ul className="car_info mb20-md">
                    <li className="list-inline-item">
                      <a href="#">BRAND NEW - IN STOCK</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-clock-1 vam" />1 years ago
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-eye vam" />
                        13102
                      </a>
                    </li>
                  </ul>
                  <h2 className="title">Volvo XC 90</h2>
                  <p className="para">
                    2.0h T8 11.6kWh Polestar Engineered Auto AWD (s/s) 5dr
                  </p>
                </div>
              </div>
            </div>
            {/* End .col-lg-7 */}

            <div className="col-lg-5 col-xl-4">
              <div className="single_page_heading_content text-start text-lg-end">
                <div className="share_content">
                  <ShareMeta />
                </div>
                <div className="price_content">
                  <div className="price mt60 mb10 mt10-md">
                    <h3>
                      <small className="mr15">
                        <del>$92,480</del>
                      </small>
                      $89,480
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* End col-lg-5 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xl-6 mb30">
              <ProductGallery />
              {/* End Car Gallery */}
            </div>
            {/* End .col-xl-6 */}

            <div className="col-md-6 col-xl-3">
              <div className="opening_hour_widgets p30 mb30">
                <div className="wrapper">
                  <Overview />
                </div>
              </div>
              {/* End opening_hour_widgets */}
            </div>
            {/* End col-xl-3 */}

            <div className="col-md-6 col-xl-3">
              <div className="offer_btns">
                <div className="text-end">
                  <button className="btn btn-thm ofr_btn1 btn-block mt0 mb20">
                    <span className="flaticon-coin mr10 fz18 vam" />
                    Make an Offer Price
                  </button>
                  <button className="btn ofr_btn2 btn-block mt0 mb20">
                    <span className="flaticon-profit-report mr10 fz18 vam" />
                    View VIN Report
                  </button>
                </div>
              </div>
              {/* End offer_btn
               */}
              <div className="sidebar_seller_contact mb30">
                <SellerDetail2 />
              </div>
            </div>
            {/* End col-xl-3 */}
          </div>
          {/* End .row top portion*/}

          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="user_profile_service">
                <Features />
                <hr />
                <div className="row">
                  <div className="col-lg-12">
                    <a className="fz12 tdu color-blue" href="#">
                      View all features
                    </a>
                  </div>
                </div>
              </div>

            </div>
            {/* End .col-xl-6 */}

            <div className="col-lg-6 col-xl-6">
              <div className="listing_single_description mt30">
                <h4 className="mb30">
                  Description{" "}
                  <span className="float-end body-color fz13">ID #9535</span>
                </h4>
                <Descriptions />
              </div>
              {/* End car descriptions */}



            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Agent Single Grid View */}




    </div>
    // End wrapper
  );
};

export default ListingSingleV3;
