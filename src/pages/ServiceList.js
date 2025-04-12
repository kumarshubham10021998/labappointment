import React from "react";
import services from "../data/services";
import { FaArrowRight } from "react-icons/fa";
import { FaCapsules } from "react-icons/fa";

import "../css/ServiceList.css";

const ServiceList = () => {
  return (
    <div className="container-service">
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={service.id} className={`service-card ${index === 0 ? "highlight" : ""}`}>
            <div className="service-icon">
              <FaCapsules className="icon" />
            </div>
            <h3 className="service-title">{service.name}</h3>
            <div className="service-buttons">
              {service.modalId && (
                <button className="btn read-more" data-bs-toggle="modal" data-bs-target={`#${service.modalId}`}>
                  Read More <FaArrowRight />
                </button>
              )}
              <a className="btn book-now" href="booking.php">
                Book Now <FaArrowRight />
              </a>
            </div>
            <div className="service-price">
              ₹ {service.price} / <span>Only pay</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
