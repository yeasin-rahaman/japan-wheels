"use client";
import React, { useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getSiteSetting } from "../../Redux/dataSlice";


const Hero = () => {
  const carSlides = [
    {
      image: "/images/home/6.jpg",

    },
    {
      image: "/images/home/2.jpg",

    },
    {
      image: "/images/home/1.jpg",

    },
  ];
  const dispatch = useDispatch();
  //for sitesetting
  useEffect(() => {
    dispatch(getSiteSetting());
  }, [dispatch]);
  const siteSetting = useSelector((state) => state.japanwheels?.siteSetting[0]);
  console.log(`siteSetting`, siteSetting)
  return (
    <div className="home-one home-six mt70-992 ovh pt0-sm">
      <div className="container-fluid p0">
        <div className="main-banner-wrapper">
          <div className="banner-style-one">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              modules={[Navigation]}
              navigation={{
                nextEl: ".right-btn",
                prevEl: ".left-btn",
              }}
            >
              {carSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="slide slide_image"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      height: "100vh",
                    }}
                  >
                    <div className="container home_fixed_content">
                      <div className="row">
                        <div className="col-lg-7 col-xl-8">
                          <div >
                            <div className="home_content">
                              <h2 className="banner-title">
                                <small>       <Image
                                  width={750}
                                  height={250}


                                  className="objects"
                                  src="/images/logo.svg"
                                  alt="border image"
                                /></small> <br /> We Delivered Dreams
                              </h2>
                              {/* <h3 className="banner_top_title text-thm d-flex align-items-baseline">
                                <span className="aminated-object1">
                                  <Image
                                    width={110}
                                    height={14}
                                    style={{
                                      objectFit: "contain",
                                    }}
                                    priority
                                    className="objects"
                                    src="/images/home/title-bottom-border.svg"
                                    alt="border image"
                                  />
                                </span>
                                <span>{slide.price}</span>{" "}
                                <small className="text-white d-inline-block ms-2">
                                  / Month
                                </small>
                              </h3> */}
                              {/* <Link
                                href="/listing-single-v1"
                                className="btn banner-btn"
                              >
                                Learn More
                              </Link> */}
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* start navigation  */}
              <div className="carousel-btn-block banner-carousel-btn">
                <span className="carousel-btn left-btn">
                  <i className="flaticon-left-arrow left" />
                </span>
                <span className="carousel-btn right-btn">
                  <i className="flaticon-right-arrow right" />
                </span>
              </div>
              {/* End navigation */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
