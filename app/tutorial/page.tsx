"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import TutorialLottie from '../components/tutorial/TutorialLottie';
import TutorialSlider from '../components/tutorial/TutorialSlider';
import TutorialFooter from '../components/tutorial/TutorialFooter';
import TutorialMobileWrapper from "../components/tutorial/TutorialMobileWrapper";
import Header from "../components/Header";

export default function TutorialPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: "slide-1", text: `Professionals around the world shared how they feel abo<span>ut technology and I've listened. Now it's your turn.</span>` },
    { id: "slide-2", text: `I'll ask you a handful of meaningful questions <span>and compare your responses with people in your industry.</span>` },
    { id: "slide-3", text: `You'll get insights into current industry sentiments an<span>d a reality check about technology in a few minutes. Deal? Great!</span>` },
  ];

  const handleRefresh = () => {
    window.location.reload();
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      router.push('/form');
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const backToHomePage = () => {
    router.push('/');
  };

  return (
    <div className="container">
      <TutorialMobileWrapper>
        <Header
          onRefresh={handleRefresh}
          onBack={backToHomePage} />
        <main>
          <section>
            <TutorialLottie />
          </section>
          <TutorialSlider
            slides={slides}
            currentSlide={currentSlide}
            onSlideChange={goToSlide} />
        </main>
        <TutorialFooter isLastSlide={currentSlide === slides.length - 1} onContinue={nextSlide} />
      </TutorialMobileWrapper>
    </div>
  );
}