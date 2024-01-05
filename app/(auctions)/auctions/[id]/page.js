"use client"

import BreadCrumb from "@/app/OurComponents/listings/BreadCrumb";
import Descriptions from "@/app/OurComponents/listings/Descriptions";
import Features from "@/app/OurComponents/listings/Features";
import Overview from "@/app/OurComponents/listings/Overview";
import ProductGallery from "@/app/OurComponents/listings/ProductGallery";
import SellerDetail2 from "@/app/OurComponents/listings/SellerDetail2";
import ShareMeta from "@/app/OurComponents/listings/ShareMeta";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ListingSingleV3 = () => {
  const { id } = useParams({});

  const [details, setDetails] = useState([]);

  const detailsData = details[0]
  const imageUrls = detailsData?.IMAGES?.split('#').reverse()
  const modelID = detailsData?.MODEL_ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.japanwheels.com/api/stats?model_id=${modelID}&page=${1}&size=${2}`);
        const data = await response.json();
        console.log("stat auction", data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [modelID]); // The empty dependency array ensures this effect runs only once on 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.japanwheels.com/api/vehicle-detail?id=${id}`);
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]); // The empty dependency array ensures this effect runs only once on 


  return (
    <>


      <div className="wrapper">


        {/* Agent Single Grid View */}


        {
          detailsData ?
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
                            <a href="#">{detailsData?.STATUS}</a>
                          </li>


                        </ul>
                        <h2 className="title">{detailsData?.MODEL_NAME}</h2>
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

                            {detailsData?.AVG_PRICE}
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
                    <ProductGallery
                      IMAGES={imageUrls}
                    />
                    {/* End Car Gallery */}
                  </div>
                  {/* End .col-xl-6 */}

                  <div className="col-md-6 col-xl-3">
                    <div className="opening_hour_widgets p30 mb30">
                      <div className="wrapper">
                        <Overview
                          detailsData={detailsData}

                        />
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
                      <Descriptions
                        imageUrls={imageUrls}
                      />
                    </div>
                    {/* End car descriptions */}



                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .container */}
            </section>
            :
            <></>
        }


        {/* End Agent Single Grid View */}




      </div>

    </>
    // End wrapper
  );
};

export default ListingSingleV3;
