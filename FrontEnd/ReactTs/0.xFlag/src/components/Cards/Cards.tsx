// Version 2: when we are getting props

import React from "react";

interface CardProps {
  title: string;
  image: string;
}

const Cards = ({ title, image }: CardProps) => {
  return (
    <>
      <div className="card-container">
        <img src={image} alt={title} className="card-image" />
        <p>{title}</p>
      </div>
    </>
  );
};

export default Cards;
