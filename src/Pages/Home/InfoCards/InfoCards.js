import { primary } from "daisyui/src/colors";
import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";
const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening hours",
      description: "Open 9.00 am to 5.00 pm everyday",
      icon: clock,
      bgClass: " bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      name: "Our Location",
      description: "Brooklyn, NY 10036, United States",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us",
      description: "+000 123 456789",
      icon: phone,
      bgClass: " bg-gradient-to-r from-primary to-secondary",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sma:grid-cols-1 gap-6 mt-8">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default InfoCards;
