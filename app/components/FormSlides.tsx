import { useEffect, useRef } from 'react';
import FormInput from './FormInput';
import FinalSlide from './FinalSlide';

interface FormSlidesProps {
  currentStep: number;
  formData: { firstName: string; email: string };
  onFormDataChange: (data: any) => void;
  onStepChange: (step: number) => void;
}

export default function FormSlides({ currentStep, formData, onFormDataChange, onStepChange }: FormSlidesProps) {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const formSectionRef = useRef<HTMLElement>(null);

  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

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
      onFormDataChange((prev: { firstName: string; email: string; }) => ({ ...prev, firstName: inputValue }));
      onStepChange(1);
    }
  };

  const handleNextEmail = () => {
    const inputValue = emailInputRef.current?.value;
    if (inputValue) {
      onFormDataChange((prev: { firstName: string; email: string; }) => ({ ...prev, email: inputValue }));
      onStepChange(2);
    }
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

  return (
    <>
      <form action="">
        <div
          id="slide-1"
          className="slide"
          ref={(el) => (slideRefs.current[0] = el)}>
          <FormInput
            onNext={handleNextFirstName}
            inputRef={firstNameInputRef}
            placeholder="First name"
            type="text"
            onKeyDown={handleKeyDownFirstName}
            labelText={"Let's start with the basics. Type in your first name."}
          />
        </div>
        <div
          id="slide-2"
          className="slide"
          ref={(el) => (slideRefs.current[1] = el)}>
          <FormInput
            onNext={handleNextEmail}
            inputRef={emailInputRef}
            placeholder="Email address"
            type="email"
            onKeyDown={handleKeyDownEmail}
            labelText={"How should we contact you? Type in your email address."}
          />
        </div>
      </form>
      <div
        id="slide-3"
        className="slide"
        ref={(el) => (slideRefs.current[2] = el)}>
        <FinalSlide userName={formData.firstName} />
      </div>
    </>
  );
}