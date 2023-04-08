import React, { useState } from 'react';
import './Carousel.css';
import { GrNext, GrPrevious } from 'react-icons/gr';

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(props.images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === props.images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  console.log(currentIndex);
  return (
    <div className="carousel-container">
      <div className="carousel-button scale-down-center">
        <GrPrevious onClick={handlePrev} />
      </div>
      <img src={props.images[currentIndex]} alt="foto carousel" />
      <div className="carousel-button scale-down-center">
        <GrNext onClick={handleNext} />
      </div>
    </div>
  );
};

export default Carousel;
