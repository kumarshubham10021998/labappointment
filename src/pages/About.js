import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import about1 from "../assets/img/about-1.jpg";
import about2 from "../assets/img/about-2.jpg";
import about3 from "../assets/img/about-3.jpg";
import about1 from "../assets/img/about-1.jpg";


const About = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-5">
          {/* Image Section */}
          <div className="col-lg-6">
            <div className="row g-0">
              <div className="col-6">
                <img className="img-fluid" src={about1} alt="About 1" />
              </div>
              <div className="col-6">
                <img className="img-fluid" src={about2} alt="About 2" />
              </div>
              <div className="col-6">
                <img className="img-fluid" src={about3} alt="About 3" />
              </div>
              <div className="col-6">
                <div
                  className="w-100 h-100 mt-n5 ms-n5 d-flex flex-column align-items-center justify-content-center"
                  style={{ backgroundColor: "#00d084" }}
                >
                  <div className="icon-box-light">
                    <i className="bi bi-award text-dark" style={{ fontSize: "2rem" }}></i>
                  </div>
                  <h1 className="display-1 text-white mb-0">5</h1>
                  <small className="fs-5 text-white">Years Experience</small>
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="col-lg-6">
            <h1 className="display-6 mb-4">Trusted Lab Experts and Latest Lab Technologies</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue,
              iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor,
              malesuada arcu quis, fringilla risus. Pellentesque eu consequat augue.
            </p>
            <div className="row g-4 g-sm-5 justify-content-center">
              <div className="col-sm-6">
                <div
                  className="btn-square flex-column rounded-circle text-center"
                  style={{ backgroundColor: "#00d084", padding: "20px" }}
                >
                  <p className="text-white mb-0">Awards Winning</p>
                  <h1 className="text-white mb-0">10</h1>
                </div>
              </div>
              <div className="col-sm-6 text-start">
                <div
                  className="btn-square flex-column rounded-circle bg-secondary text-center"
                  style={{ padding: "20px" }}
                >
                  <p className="text-white mb-0">Complete Cases</p>
                  <h1 className="text-white mb-0">100+</h1>
                </div>
              </div>
              <div className="col-sm-6">
                <div
                  className="btn-square flex-column rounded-circle bg-dark text-center"
                  style={{ padding: "20px" }}>
                  <p className="text-white mb-0">Happy Clients</p>
                  <h1 className="text-white mb-0">10</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;