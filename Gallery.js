import React, { useState } from 'react';
import { images } from './imageList';

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < images.length - 1) setIndex(index + 1);
  };

  const handlePrevious = () => {
    if (index > 0) setIndex(index - 1);
  };

  const { url, description } = images[index];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img src={url} alt={description} style={{ maxWidth: '100%', height: 'auto' }} />
      <p>{description}</p>
      <button onClick={handlePrevious} disabled={index === 0}>Previous</button>
      <button onClick={handleNext} disabled={index === images.length - 1}>Next</button>
    </div>
  );
};

export default Gallery;
