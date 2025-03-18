"use client";

import { useEffect, useRef } from 'react';

const OpinionCarousel = () => {
  const opinionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    opinionRefs.current.forEach((opinionRef, index) => {
      if (opinionRef) {
        const duration = 10 + index * 2;
        const direction = index % 2 === 0 ? -1 : 1;
        import('gsap').then(({ gsap }) => {
          gsap.to(opinionRef, {
            xPercent: direction * 50,
            duration: duration,
            repeat: -1,
            ease: 'linear',
            yoyo: true,
          });
        });
      }
    });
  }, []);

  const opinions = [
    "WA businesses feel confident about the future growth",
    "AI can't replace creativity",
    "Sales measures true success",
    "Human connection drives WA business",
    "The primary barrier to digital transformation is financial investment",
  ];

  return (
    <div className='opinion-container'>
      {opinions.map((opinion, index) => (
        <div
          key={index}
          style={{ color: 'black', zIndex: 10 }}
          ref={(el) => { opinionRefs.current[index] = el; }}
          className='opinion-item'>
          <p className="bagoss-text">{opinion}</p>
        </div>
      ))}
    </div>
  )
}

export default OpinionCarousel;