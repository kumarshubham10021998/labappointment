import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
                <div className="col-lg-7 text-end">
                  <h1 className="display-1 text-dark animated slideInRight mb-3"> Award-Winning Laboratory Center</h1>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel2} alt="Second slide" />
          <Carousel.Caption>
            <div className="container">
              <div className="row justify-content">
                <div className="col-lg-7 text-end">
                  <h1 className="display-1 text-dark animated slideInLeft mb-3">Expert Doctors & Lab Assistants</h1>
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
