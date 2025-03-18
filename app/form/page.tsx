"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import FormSlides from '../components/FormSlides';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedLottie from '../components/AnimatedLottie';

export default function FormPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ firstName: '', email: '' });

  const handleRefresh = () => {
    window.location.reload();
  };

  const backToTutorialPage = () => {
    router.push('/tutorial');
  };

  const handleContinue = () => {
    //TODO: go to the next page
  };

  const onFormDataChange = (data: any) => {
    setFormData(data);
  }

  const onStepChange = (step: number) => {
    setCurrentStep(step);
  }

  return (
    <div className="container">
      <div className="mobile-wrap">
        <div className="mobile clearfix">
          <Header
            onBack={backToTutorialPage}
            onRefresh={handleRefresh} />
          <main>
            <section>
              <div id="animation-container">
                <AnimatedLottie styles={{ width: '20%', height: '100%' }} />
              </div>
            </section>
            <section id="form-section">
              <FormSlides
                currentStep={currentStep}
                formData={formData}
                onFormDataChange={onFormDataChange}
                onStepChange={onStepChange} />
            </section>
          </main>
          <Footer
            isVisible={currentStep === 2}
            label="Continue"
            onAction={handleContinue}
            className="border border-white rounded-md w-full p-4 continue continue-final cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
