import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, bgClass, icon } = card;
  return (
    <div className={`card md:card-side p-6 text-white  shadow-xl  ${bgClass} `}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default InfoCard;
