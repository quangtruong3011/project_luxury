import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    url: 'https://landing.engotheme.com/html/lotus/demo/images/slider/img-5.jpg'
  },
  {
    id: 2,
    url: 'https://landing.engotheme.com/html/lotus/demo/images/slider/img-4.jpg'
  },
];

function SlideShow() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setActiveSlideIndex((activeSlideIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timerId);
  }, [activeSlideIndex]);

  return (
    <div className="relative">
      {slides.map((slide, index) => (
        <img
          key={slide.id}
          src={slide.url}
          alt={`Slide ${slide.id}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            activeSlideIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
    </div>
  );
}

export default SlideShow;
