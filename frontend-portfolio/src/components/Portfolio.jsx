import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";
import Img1 from "../assets/street.jpg";
import Img2 from "../assets/wedding.jpg";
import Img3 from "../assets/landscape.jpg";


const Portfolio = () => {
  return (
    <>
    <div className="container mt-4 mb-4">
        <div className="portfolio-title">
          <h2 className="text-center fw-bold">Featured Portfolio</h2>
          <span className="divider"></span>
          <p className="text-center">
            Our finest work across different photography genres
          </p>
        </div>

        <div className="row g-4 justify-content-between">
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <div
              className="card card-hover"
              style={{ width: "23rem", height: "20rem" }}
            >
              <img
                className="card-img-top"
                src={Img1}
                alt="street photography"
                style={{ objectFit: "cover", height: "100%" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "white" }}>
                  Street Photography
                </h5>
                <p className="card-text" style={{ color: "white" }}>
                  Capturing candid moments where city life tells its own story
                </p>
                <Link to="/construction" className="btn">
                  View More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <div className="card" style={{ width: "23rem", height: "20rem" }}>
              <img
                className="card-img-top"
                src={Img2}
                alt="wedding photography"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "white" }}>
                  Wedding Photography
                </h5>
                <p className="card-text" style={{ color: "white" }}>
                  Preserving every glance, laugh, and tear from your special
                  day.
                </p>
                <Link to="/construction" className="btn">
                  View More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <div
              className="card card-hover"
              style={{ width: "23rem", height: "20rem" }}
            >
              <img
                className="card-img-top"
                src={Img3}
                alt="landscape photography"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "white" }}>
                  Landscape Photography
                </h5>
                <p className="card-text" style={{ color: "white" }}>
                  Framing nature’s beauty in every horizon and detail.
                </p>
                <Link to="/construction" className="btn">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
};

export default Portfolio;