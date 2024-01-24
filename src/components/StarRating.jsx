// src/StarRating.js
import React, { useState } from 'react';
import '../style/StarRating.css';

const StarRating = () => {
  const [rating, setRating] = useState(null); // Set initial state to null

  return (
    <div className='d-flex'>
      {Array(5)
        .fill()
        .map((_, index) => (
          <span
            key={index}
            onClick={() => setRating(index+1)}
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="17.738" height="17.008" viewBox="0 0 17.738 17.008">
            <path id="star-sharp-svgrepo-com" fill={rating  <= index ? 'none' : 'black'} d="M10.17,4.025c.2-.579.3-.869.451-.95a.435.435,0,0,1,.413,0c.149.08.25.37.451.95l1.332,3.831a.99.99,0,0,0,.138.309.435.435,0,0,0,.17.123.99.99,0,0,0,.336.035l4.055.083c.613.012.92.019,1.042.136a.435.435,0,0,1,.128.393c-.03.166-.275.352-.764.722l-3.232,2.45a.993.993,0,0,0-.251.226.436.436,0,0,0-.065.2.992.992,0,0,0,.07.331l1.174,3.882c.178.587.266.881.193,1.033a.435.435,0,0,1-.334.243c-.168.023-.419-.153-.923-.5L11.225,15.2a.994.994,0,0,0-.293-.169.435.435,0,0,0-.21,0,.994.994,0,0,0-.293.169L7.1,17.518c-.5.35-.755.526-.923.5a.435.435,0,0,1-.334-.243c-.073-.152.016-.446.193-1.033l1.174-3.882a.991.991,0,0,0,.07-.331.436.436,0,0,0-.065-.2.993.993,0,0,0-.251-.226L3.734,9.656C3.245,9.286,3,9.1,2.97,8.934A.435.435,0,0,1,3.1,8.541c.122-.117.429-.123,1.042-.136l4.055-.083a.991.991,0,0,0,.336-.035.435.435,0,0,0,.17-.123.991.991,0,0,0,.138-.309Z" transform="translate(-1.959 -2.011)" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          </svg>

          </span>
        ))}

    </div>
  );
};

export default StarRating;
