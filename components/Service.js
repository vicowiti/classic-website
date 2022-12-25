import Image from "next/image";
import React from "react";

const Service = ({ service }) => {
  return (
    <article className="service-card">
      <div className="service-img">
        <Image src={service.image} alt="service image" className="s-img" />
      </div>
      <div className="service-text">
        <h2 className="article-heading">{service.name}</h2>
        <p className="article-desc">{service.desc}</p>
      </div>
    </article>
  );
};

export default Service;
