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

  const onGetStarted = () => {
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
          {/* <Footer onGetStarted={getStarted} /> */}
          <Footer
            label="Get a reality check"
            onAction={onGetStarted}
            ariaLabel="Get a reality check"
            className='border border-white rounded-md w-full p-4 continue cursor-pointer get-reality-check' />
        </div>
      </div>
    </div>
  );
}