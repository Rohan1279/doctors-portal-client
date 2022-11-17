import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";
const Services = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description: "",
      img: cavity,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description: "",
      img: fluoride,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description: "",
      img: whitening,
    },
  ];
  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-primary uppercase text-xl font-bold">
          Our Services
        </h3>
        <h2 className="text-3xl">Services we provide</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
