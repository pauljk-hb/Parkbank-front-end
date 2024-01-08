// src/StarRating.js
import React, { useState } from 'react';
import '../style/StarRating.css';

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
          <span
            key={index}
            className={index < rating ? 'filled' : ''}
            onClick={() => handleClick(index)}
          >
            ★
          </span>
        ))}
    </div>
  );
};

export default StarRating;
