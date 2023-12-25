"use client"
import listingCar from "@/data/listingCar";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
const CarItems = () => {
  const [listingCars, setListingCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.japanwheels.com/api/vehicles?count=10');
        const data = await response.json();
        setListingCars(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once on component mount


  return (
    <>


      {
        listingCars.slice(0, 9).map((listing) => (
          <div className="col-sm-6 col-xl-4" key={listing.ID}>
            <Link href={`listings/${listing.ID}`}>
              <div className="car-listing">
                <div className="thumb">
                  {listing.AUCTION ? (
                    <>
                      <div className="tag">FEATURED</div>
                    </>
                  ) : undefined}
                  {!listing.AUCTION ? (
                    <>
                      <div className="tag blue">SPECIAL</div>
                    </>
                  ) : undefined}





                  < Image

                    width={284}
                    height={183}
                    style={{
                      width: "100%",
                      height: "10rem",
                      objectFit: "cover",
                    }}
                    priority
                    src={listing.IMAGES.split('#')[0]}  // Use only the first image URL
                    alt={""}
                  />






                  <div className="thmb_cntnt2">
                    <ul className="mb0">
                      <li className="list-inline-item">
                        <a className="text-white" href="#">
                          <span className="flaticon-photo-camera mr3" />{" "}
                          {listing.YEAR}
                        </a>
                      </li>

                    </ul>
                  </div>
                  <div className="thmb_cntnt3">
                    <ul className="mb0">
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-shuffle-arrows" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="details">
                  <div className="wrapper">
                    <h5 className="price">{listing.MODEL_NAME}</h5>
                    <h6 className="title">
                      {listing.YEAR}
                    </h6>
                    <div className="listign_review">
                      <ul className="mb0">
                        {[...Array(5)].map((_, index) => (
                          <li key={index} className="list-inline-item">
                            <a href="#">
                              <i className="fa fa-star" />
                            </a>
                          </li>
                        ))}
                        <li className="list-inline-item">
                          <a href="#">{listing.RATE}</a>
                        </li>
                        <li className="list-inline-item">
                          ({listing.RATE} reviews)
                        </li>
                      </ul>

                    </div>
                  </div>
                  {/* End wrapper */}

                  <div className="listing_footer">
                    <ul className="mb0">
                      <li className="list-inline-item">
                        <span className="flaticon-road-perspective me-2" />
                        {listing.MILEAGE}
                      </li>
                      <li className="list-inline-item">
                        <span className="flaticon-gas-station me-2" />
                        {listing.MODEL_ID}
                      </li>
                      <li className="list-inline-item">
                        <span className="flaticon-gear me-2" />
                        {listing.ENG_V}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      }

      <div className="col-lg-12">
        <div className="mbp_pagination mt20">
          <div className="new_line_pagination text-center">
            <p>Showing 36 of 497 Results</p>
            <div className="pagination_line" />
            <a className="pagi_btn" href={`listings/1`}>
              Show More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarItems;
