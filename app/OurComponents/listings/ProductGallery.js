"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

const slides = [
  {
    imageSrc: "/images/item/1.png",
    videoId: "VWrJkx6O0L8",
  },
  {
    imageSrc: "/images/item/2.png",
    videoId: "TLEyLGWvjII",
  },
  {
    imageSrc: "/images/item/3.png",
    videoId: "BS2jGGYC60c",
  },
  {
    imageSrc: "/images/item/4.png",
    videoId: "8PiZNUCexrA",
  },
  {
    imageSrc: "/images/item/5.png",
    videoId: "m4ZGuAbUMg8",
  },
];

export default function ProductGallery({ IMAGES }) {

  console.log(IMAGES);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const openModal = (id) => {
    setVideoId(id);
    setOpen(true);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 sps_content single_product_grid user_profile "
          >
            {/* {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <Image
                    width={856}
                    height={554}
                    priority
                    style={{ objectFit: "cover" }}
                    className="w-100 h-100"
                    src={slide.imageSrc}
                    alt="large car"
                  />

                  <div className="overlay_icon">
                    <button
                      className="video_popup_btn popup-img popup-youtube"
                      onClick={() => openModal(slide.videoId)}
                    >
                      <span className="flaticon-play-button" />
                      Video
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))} */}


            {IMAGES?.map((imageUrl, index) => (


              <SwiperSlide key={index}>

                <div className="item">
                  <Image
                    width={856}
                    height={554}
                    priority
                    style={{ objectFit: "cover" }}
                    // className="w-100 h-100"
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                  />


                </div>
              </SwiperSlide>
            ))}


          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper mt-2 thumb-gallery-opacity"
          >
            {IMAGES?.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <Image
                  width={163}
                  height={106}
                  priority
                  style={{ objectFit: "cover" }}
                  src={imageUrl}
                  alt="thum car"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>


    </>
  );
}
