import React, { useEffect, useState } from 'react';


const Slideshow = () => {
  const slides = [
    "https://landing.engotheme.com/html/lotus/demo/images/slider/img-4.jpg",
    "https://landing.engotheme.com/html/lotus/demo/images/slider/img-5.jpg"
  ];
  const [slideIndex, setSlideIndex] = useState(0);

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
          className={`slide ${
            slideIndex === index ? 'active-slide' : 'inactive-slide'
          }`}
        >
          <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
// create a new Slideshow

const SlideShow = () => {
  const imgSlides = [
    "https://landing.engotheme.com/html/lotus/demo/images/slider/img-4.jpg",
    "https://landing.engotheme.com/html/lotus/demo/images/slider/img-5.jpg"
  ];

}