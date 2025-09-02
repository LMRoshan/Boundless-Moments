import React from 'react'
import Pic1 from "../assets/gallery/land1.jpg";
import Pic2 from "../assets/gallery/land2.jpg";
import Pic3 from "../assets/gallery/wed3.jpg";
import Pic4 from "../assets/gallery/wed2.jpg";
import Pic5 from "../assets/gallery/street1.jpg";
import Pic6 from "../assets/gallery/street2.jpg";
import Pic7 from "../assets/gallery/street3.jpg";
import Pic8 from "../assets/gallery/nature1.jpg";

import "../App.css"
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div>
      <div className="gallery mt-4" style={{ background: "#f1f1f1" }}>
              <div className="container pt-4 pb-4">
                <div className="gallery-title">
                  <h2 className="text-center fw-bold">Photo Gallery</h2>
                  <span className="divider"></span>
                  <p className="text-center">
                    Explore our extensive collection of photographs
                  </p>
                </div>
      
                <div className="gallery-grid">
                  <div className="gallery-item">
                    <img src={Pic1} alt="landscape" />
                  </div>
      
                  <div className="gallery-item">
                    <img src={Pic5} alt="street" />
                  </div>
      
                  <div className="gallery-item">
                    <img src={Pic3} alt="wedding" />
                  </div>
                  <div className="gallery-item">
                    <img src={Pic2} alt="landscape" />
                  </div>
      
                  <div className="gallery-item">
                    <img src={Pic6} alt="street" />
                  </div>
      
                  <div className="gallery-item">
                    <img src={Pic4} alt="wedding" />
                  </div>
                  <div className="gallery-item">
                    <img src={Pic7} alt="street" />
                  </div>
      
                  <div className="gallery-item">
                    <img src={Pic8} alt="nature" />
                  </div>
                </div>
                <div className="gallery-footer text-center mt-4">
                  <Link to="/gallery" className="btn-gallery">
                    View Full Gallery
                  </Link>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Gallery
