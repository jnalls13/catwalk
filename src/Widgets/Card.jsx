import React, { useState } from 'react';
import GalleryCarousel from './GalleryCarousel.jsx';
import StarRating from './StarRating.jsx';

const Card = ({details, images, cardClick, addOutfit, index, btnClick, glyph}) => {
  const [isHovering, setIsHovering] = useState(false);

  console.log('details: ', details);

  if (addOutfit) {
    return (
      <div className="card" id="addOutfit-card">
        <div className="card-display">
          <button className="addOutfit-btn" onClick={addOutfit}> + </button>
        </div>
        <div className="card-info addOutfit-text">
          <h2>Add Outfit</h2>
        </div>
      </div>
    )
  } else {
    return (
      <div className="card" onClick={cardClick.bind(this, details.id)}>
        <div className="card-display" onMouseEnter={() => setIsHovering(!isHovering)} onMouseLeave={() => setIsHovering(!isHovering)}>
          <button onClick={btnClick.bind(this, index)}>{glyph}</button>
          <img src={images[0].thumbnail_url}/>
        </div>
        <div className="card-info">
          <p>{details.category}</p>
          <h3>{details.name}</h3>
          <p>{details.slogan}</p>
          <p>${details.default_price}</p>
          <StarRating product={details}/>
        </div>
      </div>
    )
  }
}

export default Card;