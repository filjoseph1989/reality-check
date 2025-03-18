"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import FormAnimation from '../components/FormAnimation';
import FormSlides from '../components/FormSlides';
import FormFooter from '../components/FormFooter';
import Header from '../components/Header';

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
                <FormAnimation />
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
          <FormFooter
            isVisible={currentStep === 2}
            onContinue={handleContinue} />
        </div>
      </div>
    </div>
  );
}
