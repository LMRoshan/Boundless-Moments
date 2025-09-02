import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Img1 from "../assets/banner1.png";
import Img2 from "../assets/banner2.png";
import Img4 from "../assets/banner4.png";
import { Link } from "react-router-dom";
import "../App.css";

const Banner = () => {
  return (
    <div style={{ position: "relative", height: "90vh" }}>
     
      <Swiper
        style={{ height: "100%" }}
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        loop={true}
      >
        <SwiperSlide>
          <img
            src={Img1}
            alt="banner1"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Img2}
            alt="banner2"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Img4}
            alt="banner4"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>

      
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
          zIndex: 1
        }}
      ></div>

      
      <div
        className="container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
        }}
      >
        <div className="row">
          <div className="col-lg-8">
            <h1 className="display-3 fw-bold mb-4">
              Capture Your{" "}
              <span style={{ color: "var(--secondary-color)" }}>
                Boundless Moments
              </span>
            </h1>
            <p className="lead mb-4">
              Professional photography services specializing in portraits,
              events, and commercial photography. Let us tell your story
              through our lens.
            </p>
            <Link to="/portfolio" className="btn-view-work me-3">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
