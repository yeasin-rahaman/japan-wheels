"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";

const partners = [
  { imgPath: "/images/partners/1.png", delay: 100 },
  { imgPath: "/images/partners/2.png", delay: 300 },
  { imgPath: "/images/partners/3.png", delay: 500 },
  { imgPath: "/images/partners/4.png", delay: 700 },
  { imgPath: "/images/partners/5.png", delay: 900 },
  { imgPath: "/images/partners/6.png", delay: 1100 },
  { imgPath: "/images/partners/7.png", delay: 1300 },
  { imgPath: "/images/partners/8.png", delay: 1500 },
  { imgPath: "/images/partners/9.png", delay: 1700 },
  { imgPath: "/images/partners/10.png", delay: 1900 },
  { imgPath: "/images/partners/11.png", delay: 2100 },
  { imgPath: "/images/partners/12.png", delay: 2300 },
  { imgPath: "/images/partners/13.png", delay: 2500 },
  { imgPath: "/images/partners/14.png", delay: 2700 },
  { imgPath: "/images/partners/15.png", delay: 2900 },
  { imgPath: "/images/partners/16.png", delay: 3100 },
  { imgPath: "/images/partners/17.png", delay: 3300 },
  { imgPath: "/images/partners/18.png", delay: 3500 },
  { imgPath: "/images/partners/19.png", delay: 3500 },
  { imgPath: "/images/partners/20.png", delay: 3500 },
  { imgPath: "/images/partners/21.png", delay: 3500 },
  { imgPath: "/images/partners/22.png", delay: 3500 },
  { imgPath: "/images/partners/23.png", delay: 3500 },
];

const Partner = () => {
  return (
    <>
      <Swiper
        data-aos="fade-up"
        className="FoodHistory"
        spaceBetween={30}
        grabCursor={false}
        centeredSlides={false}
        slidesPerView={"auto"}
        loop={true}
        hashNavigation={{
          watchState: true,
        }}
        autoplay={{
          delay: 2200,
          disableOnInteraction: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
        }}
        // navigation={true}
        modules={[Autoplay, Navigation]}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index} data-aos-delay={partner.delay}>
            <Image
              width={130}
              height={80}
              style={{ objectFit: "contain" }}
              src={partner.imgPath}
              alt={`partner-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Partner;
