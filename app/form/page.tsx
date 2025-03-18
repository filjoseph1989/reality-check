"use client";

import refreshIcon from '../../public/refresh.svg';
import juiceBox from '../../public/juicebox.svg';
import arrow from '../../public/arrow.svg';
import upArrow from '../../public/up-arrow.svg';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

const handleRefresh = () => {
  window.location.reload();
};

export default function FormPage() {
  const [animationData, setAnimationData] = useState<object>();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ firstName: '', email: '' });
  const lottieRef = useRef<any>(null);
  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const formSectionRef = useRef<HTMLElement>(null);
  const router = useRouter();

  // Load Lottie animation
  useEffect(() => {
    import('../../public/animation/lottie.json').then((data) => {
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

  // Initialize slide positions
  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      slideRefs.current.forEach((slide, index) => {
        if (slide) {
          if (index === 0) {
            gsap.set(slide, { x: 0, opacity: 1 }); // Show slide-1 initially
          } else {
            gsap.set(slide, { x: '100%', opacity: 0 }); // Hide slide-2 to the right
          }
        }
      });
    });
  }, []);

  // Handle slide transitions and result display
  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      if (currentStep === 0) {
        gsap.to(slideRefs.current[0], { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' });
        gsap.to([slideRefs.current[1], slideRefs.current[2]], { x: '100%', opacity: 0, duration: 0.5, ease: 'power2.out' });
        if (formSectionRef.current) gsap.to(formSectionRef.current, { opacity: 1, duration: 0.5 });
      } else if (currentStep === 1) {
        gsap.to(slideRefs.current[0], { x: '-100%', opacity: 0, duration: 0.5, ease: 'power2.out' });
        gsap.to(slideRefs.current[1], { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' });
        gsap.to(slideRefs.current[2], { x: '100%', opacity: 0, duration: 0.5, ease: 'power2.out' });
        if (formSectionRef.current) gsap.to(formSectionRef.current, { opacity: 1, duration: 0.5 });
      } else if (currentStep === 2) {
        gsap.to([slideRefs.current[0], slideRefs.current[1]], { x: '-100%', opacity: 0, duration: 0.5, ease: 'power2.out' });
        gsap.to(slideRefs.current[2], { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' });
        if (formSectionRef.current) gsap.to(formSectionRef.current, { opacity: 1, duration: 0.5 });
      }
    });
  }, [currentStep]);

  const handleNextFirstName = () => {
    const inputValue = firstNameInputRef.current?.value;
    if (inputValue) {
      setFormData((prev) => ({ ...prev, firstName: inputValue }));
      setCurrentStep(1);
    }
  };

  const handleNextEmail = () => {
    const inputValue = emailInputRef.current?.value;
    if (inputValue) {
      setFormData((prev) => ({ ...prev, email: inputValue }));
      setCurrentStep(2);
    }
  };

  const backToTutorialPage = () => {
    router.push('/tutorial');
  };

  const handleKeyDownFirstName = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleNextFirstName();
    }
  };

  const handleKeyDownEmail = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleNextEmail();
    }
  };

  const handleContinue = () => {
    //TODO: go to the next page
  }

  return (
    <div className="container">
      <div className="mobile-wrap">
        <div className="mobile clearfix">
          <header>
            <nav>
              <div>
                <div>
                  <div className="back-button-container" onClick={backToTutorialPage}>
                    <Image src={arrow} alt="Back Icon" />
                  </div>
                </div>
                <div>
                  <Image src={juiceBox} alt="Juicebox Icon" />
                </div>
                <div>
                  <div>
                    <Image src={refreshIcon} alt="Refresh Icon" onClick={handleRefresh} />
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
                    style={{ width: '20%', height: 'auto' }} />
                )}
              </div>
            </section>
            <section id="form-section" ref={formSectionRef}>
              <form action="">
                <div
                  id="slide-1"
                  className="slide"
                  ref={(el) => (slideRefs.current[0] = el)}>
                  <div className="text-input-section">
                    <p className="bagoss-text">Let's start with the basics. Type in your first name.</p>
                  </div>
                  <div className="input-field-section relative">
                    <input
                      type="text"
                      placeholder="First name"
                      className="border border-white rounded-md w-full p-4 pr-12"
                      ref={firstNameInputRef}
                      onKeyDown={handleKeyDownFirstName} />
                    <button
                      type="button"
                      onClick={handleNextFirstName}
                      className="button-next absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none outline-none cursor-pointer">
                      <Image src={upArrow} alt="Up Arrow Icon" width={20} height={20} />
                    </button>
                  </div>
                </div>
                <div
                  id="slide-2"
                  className="slide"
                  ref={(el) => (slideRefs.current[1] = el)}>
                  <div className="text-input-section">
                    <p className="bagoss-text">How should we contact you? Type in your email address.</p>
                  </div>
                  <div className="input-field-section relative">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="border border-white rounded-md w-full p-4 pr-12"
                      ref={emailInputRef}
                      onKeyDown={handleKeyDownEmail} />
                    <button
                      type="button"
                      onClick={handleNextEmail}
                      className="button-next absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none outline-none cursor-pointer">
                      <Image src={upArrow} alt="Up Arrow Icon" width={20} height={20} />
                    </button>
                  </div>
                </div>
              </form>
              <div
                id="slide-3"
                className="slide"
                ref={(el) => (slideRefs.current[2] = el)}>
                <div className="text-input-section">
                  <p>Thanks {formData.firstName}! Now, it's time to get a reality check</p>
                  <p className="mt-4">This will take 2-3 minutes</p>
                </div>
              </div>
            </section>
          </main>
          <footer>
            {currentStep === 2 && (
              <button
                aria-label="Get a reality check"
                className="border border-white rounded-md w-full p-4 continue continue-final cursor-pointer"
                onClick={handleContinue}> Continue
              </button>
            )}
          </footer>
        </div>
      </div>
    </div>
  );
}