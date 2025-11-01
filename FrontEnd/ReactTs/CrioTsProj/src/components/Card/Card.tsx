/**
 * type CardProps = {
  title: string;
  date: string;
  holidayType: string;
};

const Card = ({ title, date, holidayType }: CardProps) => {
  // component logic here
};

 * 
 */

// This is version 2 of tsx where we  have any props
import React from "react";

interface CardProps {
  title: string;
  date: string;
  holidayType: string;
}

const Card = ({ title, date, holidayType }: CardProps) => {
  // const Card: React.FC<CardProps> = ({ title, date, holidayType }) => {

  return (
    <>
      <div className="card-container">
        <h1>Public Holiday Tracker</h1>
      </div>
    </>
  );
};

export default Card;
