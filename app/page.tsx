"use client";

import { useRouter } from 'next/navigation';
import Header from './components/Header';
import AnimatedLottie from './components/AnimatedLottie';
import OpinionCarousel from './components/OpinionCarousel';
import Footer from './components/Footer';

export default function Home() {
  const router = useRouter();

  const handleRefresh = () => {
    window.location.reload();
  }

  const getStarted = () => {
    router.push('/tutorial');
  }

  return (
    <div className="container">
      <div className="mobile-wrap">
        <div className="mobile clearfix">
          <Header onRefresh={handleRefresh} />
          <main>
            <section>
              <div id="animation-container">
                <AnimatedLottie />
                <OpinionCarousel />
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
          <Footer onGetStarted={getStarted} />
        </div>
      </div>
    </div>
  );
}