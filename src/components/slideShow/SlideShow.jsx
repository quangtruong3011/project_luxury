import React, { useState, useEffect } from 'react';

function SlideShow() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    'https://landing.engotheme.com/html/lotus/demo/images/slider/img-4.jpg',
    'https://landing.engotheme.com/html/lotus/demo/images/slider/img-5.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === slideIndex ? 'active-slide' : ''}`}
        >
          <img src={slide} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default SlideShow;
