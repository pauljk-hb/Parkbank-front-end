import React from 'react';

function ViewRating({ fillNumber }){
    const svgs = [];
  
    for (let i = 1; i <= 5; i++) {
      const fill = i <= fillNumber ? 'filled' : 'empty';
  
      svgs.push(
        <svg xmlns="http://www.w3.org/2000/svg" key={i} width="18.001" height="18.394" viewBox="0 0 18.001 18.394">
          <path id="image-svgrepo-com" stroke={fill === 'filled' ? 'black' : '#B1B1B1'} d="M13.413,15l-2.87-4.066c-.457-.648-.686-.971-.967-1.081a1,1,0,0,0-.761.015c-.276.12-.492.453-.922,1.119L4.257,16.6a2.1,2.1,0,0,0-.177.3,1,1,0,0,0-.065.22A2.1,2.1,0,0,0,4,17.472V20H20V17.46a2.1,2.1,0,0,0-.014-.34,1,1,0,0,0-.062-.215,2.111,2.111,0,0,0-.169-.3l-.966-1.54c-.854-1.361-1.281-2.041-1.836-2.289a2,2,0,0,0-1.532-.042c-.567.217-1.031.874-1.957,2.186Zm0,0,3.542,5M20,6a2,2,0,1,1-2-2A2,2,0,0,1,20,6Z" transform="translate(-3 -3)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </svg>
      );
    }
  
    return <div className="rating-icons gab-big">{svgs}</div>;
  };
  export default ViewRating;