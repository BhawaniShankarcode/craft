"use client"
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [slides, setSlides] = useState([

    { id: 1, content: 'Slide 1' },
    
    { id: 2, content: 'Slide 2' },
    { id: 3, content: 'Slide 3' },
  ]);

  useEffect(() => {
    const slideWidth = 300; // adjust this value to match your slide width
    const containerWidth = slideWidth * slides.length;
    const translateValue = currentIndex * slideWidth;

    setTranslateX(-translateValue);
  }, [currentIndex, slides]);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(${translateX}px)`,
          width: `${slides.length * 300}px`, // adjust this value to match your slide width
        }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="carousel-slide">
            {slide.content}
          </div>
        ))}
      </div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;