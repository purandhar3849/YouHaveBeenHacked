import React, { useState } from 'react';

// Star component to display individual stars
const Star = ({ filled, onClick }) => {
  return (
    <span
      style={{
        fontSize: '2rem',
        color: filled ? 'gold' : 'gray',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      ★
    </span>
  );
};

// Rating component
const Rating = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState(0);

  // Handle click on star to set rating
  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      <h3>Rate this product</h3>
      <div>
        {[...Array(maxRating)].map((_, index) => (
          <Star
            key={index}
            filled={index < rating}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <p>Your rating: {rating}</p>
    </div>
  );
};

export default Rating;
