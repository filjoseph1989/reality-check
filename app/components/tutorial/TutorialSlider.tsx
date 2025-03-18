"use client";

import { useEffect, useRef } from 'react';

interface Slide {
  id: string;
  text: string;
}

interface TutorialSliderProps {
  slides: Slide[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

const TutorialSlider = ({ slides, currentSlide, onSlideChange }: TutorialSliderProps) => {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      slideRefs.current.forEach((slide, index) => {
        if (slide) {
          if (index === 0) {
            gsap.set(slide, { x: 0, opacity: 1 });
          } else {
            gsap.set(slide, { x: '100%', opacity: 0 });
          }
        }
      });
    });
  }, []);

  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      slideRefs.current.forEach((slide, index) => {
        if (slide) {
          if (index === currentSlide) {
            gsap.to(slide, {
              x: 0,
              opacity: 1,
              duration: 0.5,
              ease: 'power2.out',
            });
          } else if (index < currentSlide) {
            gsap.to(slide, {
              x: '-100%',
              opacity: 0,
              duration: 0.5,
              ease: 'power2.out',
            });
          } else {
            gsap.to(slide, {
              x: '100%',
              opacity: 0,
              duration: 0.5,
              ease: 'power2.out',
            });
          }
        }
      });
    });
  }, [currentSlide, slides.length]);

  return (
    <section className="slider-container">
      <div className="slides-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            id={slide.id}
            className="slide text-container"
            ref={(el) => { slideRefs.current[index] = el; }}>
            <p className="bagoss-text" dangerouslySetInnerHTML={{ __html: slide.text }}></p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => onSlideChange(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default TutorialSlider;
