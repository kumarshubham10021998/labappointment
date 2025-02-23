import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images if inside src/assets/img/
import carousel1 from "../assets/img/carousel-1.jpg";
import carousel2 from "../assets/img/carousel-2.jpg";

const HeaderCarousel = () => {
  return (
    <div className="container-fluid header-carousel px-0 mb-5">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="First slide" />
          <Carousel.Caption>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-7 text-start">
                  <h1 className="display-1 text-white animated slideInRight mb-3">
                    Award-Winning Laboratory Center
                  </h1>
                  <p className="mb-5 animated slideInRight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor.
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={carousel2} alt="Second slide" />
          <Carousel.Caption>
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-lg-7 text-end">
                  <h1 className="display-1 text-white animated slideInLeft mb-3">
                    Expert Doctors & Lab Assistants
                  </h1>
                  <p className="mb-5 animated slideInLeft">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor.
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeaderCarousel;
