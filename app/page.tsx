"use client";

import dynamic from 'next/dynamic';
import juiceBox from '../public/juicebox.svg';
import refreshIcon from '../public/refresh.svg';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

export default function Home() {
  const [animationData, setAnimationData] = useState<object>();
  const lottieRef = useRef<any>(null);
  const opinionRefs = useRef<(HTMLDivElement|null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    import('../public/animation/lottie.json').then((data) => {
      console.log('loading animation data');
      setAnimationData(data);

      import('gsap').then(({ gsap }) => {
        gsap.from(lottieRef.current?.container, {
          duration: 1.5,
          opacity: 0,
          y: 50,
          ease: 'power3.out',
        });

        lottieRef.current?.container.addEventListener('mouseenter', () => {
          gsap.to(lottieRef.current?.container, {
            duration: 0.3,
            scale: 1.02,
            ease: 'power2.out',
          });
        });

        lottieRef.current?.container.addEventListener('mouseleave', () => {
          gsap.to(lottieRef.current?.container, {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out',
          });
        });
      });
    });
  }, []);

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

  const handleRefresh = () => {
    window.location.reload();
  }

  const getStarted = () => {
    router.push('/tutorial');
  }

  return (
    <>
    <div className="container">
      <div className="mobile-wrap">
        <div className="mobile clearfix">
          <header>
            <nav>
              <div>
                <div>
                  <div></div>
                </div>
                <div>
                  <Image src={juiceBox} alt="Icon" />
                </div>
                <div>
                  <div>
                    <Image src={refreshIcon} alt="Icon" onClick={handleRefresh} />
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <main>
            <section>
              <div id="animation-container">
                {animationData && (
                  <Lottie
                    ref={lottieRef}
                    play
                    loop
                    animationData={animationData}
                    style={{ width: '100%', height: 'auto' }} />
                )}
                <div className='opinion-container'>
                  {opinions.map((opinion, index) => (
                    <div
                      key={index}
                      style={{ color: 'black', zIndex: 10 }}
                      ref={(el) => (opinionRefs.current[index] = el)}
                      className='opinion-item'>
                      <p className="bagoss-text">{opinion}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section>
              <div>
                <p>
                  Compare your thoughts on{' '}
                  <span className="gradient-text">technology</span> with current
                  industry opinions.
                </p>
              </div>
            </section>
          </main>
          <footer>
            <button
              aria-label="Get a reality check"
              onClick={getStarted}
              className="border border-white rounded-md w-full p-4 continue cursor-pointer get-reality-check">Get a reality check
            </button>
          </footer>
        </div>
      </div>
    </div>
    </>
  );
}