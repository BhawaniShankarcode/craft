"use client"
import React, { useState,useEffect, useRef } from "react";
import styles from "./Slider.module.css";
import Image from "next/image";
import Link from "next/link";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    slideRef.current.style.transition = "transform 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${
      currentSlide * (100 / slides.length)
    }%)`;
  }, [currentSlide]);

  const slides = [
    {
      image: "/Blog1.png",
      title: "Allow your customers to create visuals from a Form",
      description:
        "Learn step by step how to empower your customers with image generation.",
    },
    {
      image: "/Blog2.png",
      title: "Allow your customers to create visuals from a Form",
      description:
        "Learn step by step how to empower your customers with image generation.",
    },
    {
      image: "/Blog3.png",
      title: "Allow your customers to create visuals from a Form",
      description:
        "Learn step by step how to empower your customers with image generation.",
    },
  ];

  return (
    <>

<div className={styles.mainSlider}>
    <p className="lg:pt-auto pt-7 text-center lg:text-[80px] text-[20px] font-bold text-white lg:p-16">Blogs by Craftly <Image src="/frame5.png" alt="frame5" className="inline md:w-[80px] md:h-[80px] w-9 h-9" height={200} width={200}/> </p>
    <div className={styles.sliderContainer}>
      <div className={styles.sliderControls}>
        <button onClick={handlePrevSlide} className={styles.prevButton}>
          &#10094;
        </button>
        <button onClick={handleNextSlide} className={styles.nextButton}>
          &#10095;
        </button>
      </div>
      <div className={styles.sliderWrapper} ref={slideRef}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <Image src={slide.image} alt={slide.title} className={styles.slideImage} width={200} height={200}/>
            <div className={styles.slideContent}>
              <h2 className={styles.slideTitle}>{slide.title}</h2>
              <p className={styles.slideDescription}>{slide.description}</p>
            
              <Link href="/" className={`${styles.BlogRead}`}>READ MORE <Image src="/arrow2.png" alt="Arrow" className={`${styles.arrows2} inline md:ml-20 ml-4`} height={10} width={10} /></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Slider;