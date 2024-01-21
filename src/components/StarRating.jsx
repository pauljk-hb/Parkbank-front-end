// src/StarRating.js
import React, { useState } from 'react';
import '../style/StarRating.css';
import star from "./icons/star.svg"
import { star } from 'astro:icons';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
    // Add your desired functionality here
    console.log("Selected rating:", rating);
  };

  return (
    <div className="star-rating">
      {Array(5)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            className={`star-container ${index < rating ? 'filled' : ''}`}
            onClick={() => handleClick(index)}
          >
            <Icon name="star" />
          </div>
        ))}
    </div>
  );
};

export default StarRating;
