import React from "react";
import { myServices } from "../libs/servicesData";
import Service from "./Service";
const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-wrapper">
        <div>
          <h2 className="section-header">Our Services</h2>
        </div>

        <div className="card-container">
          {myServices.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
