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
      buttonText: "Read More",
      buttonLink: "/slide1",
    },
    {
      image: "/Blog2.png",
      title: "Allow your customers to create visuals from a Form",
      description:
        "Learn step by step how to empower your customers with image generation.",
      buttonText: "Read More",
      buttonLink: "/slide2",
    },
    {
      image: "/Blog3.png",
      title: "Allow your customers to create visuals from a Form",
      description:
        "Learn step by step how to empower your customers with image generation.",
      buttonText: "Read More",
      buttonLink: "/slide3",
    },
  ];

  return (
    <>
            {/* <div className="blogBox">
  <div className="BlogCraft">
  </div>
  <div className="Blogs">
    <Image src="/blogbtn1.png" alt="previous" className="lg:h-[55px] lg:w-[55px] h-[10px] w-[10px]" fill/>
    <div className="Blog">
    <Image src={slides[0].image} fill alt="Blog" className="cardsImg"/>
      <p className="blogHead">{slides[0].title}</p>
      <p className="blogPara">{slides[0].description}</p>
       <Link href="/" className="BlogRead">READ MORE <Image src="/arrow2.png" fill alt="Arrow" className="arrow2 inline ml-8"/></Link>
    </div>
    <div className="Blog">
      <Image src={slides[1].image} fill alt="Blog" className="cardsImg"/>
      <p className="blogHead">Allow your customers to create visuals from a Form</p>
      <p className="blogPara">Learn step by step how to empower your customers with image generation.</p>
      <Link href="/" className="BlogRead">READ MORE<Image src="/arrow2.png" fill alt="Arrow" className="arrow2 inline ml-8"/></Link>
    </div>
    <div className="Blog">
    <Image src={slides[2].image} alt="Blog" className="cardsImg" fill/>
      <p className="blogHead">{slides[2].title}</p>
      <p className="blogPara">{slides[2].description}</p>
      <Link href="/" className="BlogRead">READ MORE <Image src="/arrow2.png" alt="Arrow" className="arrow2 inline ml-8" fill/></Link>
      </div>
    <Image src="/blogbtn2.png" fill alt="Next" className="lg:h-[55px] lg:w-[55px] h-[10px] w-[10px]"/>
    </div>
    </div> */}
    




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
              {/* <a
                href={slide.buttonLink}
                className={styles.slideButton}
              >
                {slide.buttonText}
              </a> */}
              <Link href="/" className={`${styles.BlogRead}`}>READ MORE <Image src="/arrow2.png" alt="Arrow" className={`arrows2 arrow2 inline md:ml-20 ml-4`} height={20} width={20} /></Link>
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