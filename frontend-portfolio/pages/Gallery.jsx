import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Pic1 from "../src/assets/gallery/land1.jpg";
import Pic2 from "../src/assets/gallery/land2.jpg";
import Pic3 from "../src/assets/gallery/wed3.jpg";
import Pic4 from "../src/assets/gallery/wed2.jpg";
import Pic5 from "../src/assets/gallery/street1.jpg";
import Pic6 from "../src/assets/gallery/street2.jpg";
import Pic7 from "../src/assets/gallery/street3.jpg";
import Pic8 from "../src/assets/gallery/nature1.jpg";
const Gallery = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="gallery mt-4">
          <div className="container pt-4 pb-4">
            <div className="gallery-title">
              <h2 className="text-center fw-bold">Photo Gallery</h2>
              <span className="divider"></span>
              <p className="text-center">
                Explore our extensive collection of photographs
              </p>
            </div>

            <div className="gallery-main-grid">
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

              <div className="gallery-item">
                <img src={Pic1} alt="landscape" />
              </div>

              <div className="gallery-item">
                <img src={Pic5} alt="street" />
              </div>

              <div className="gallery-item">
                <img src={Pic3} alt="wedding" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
