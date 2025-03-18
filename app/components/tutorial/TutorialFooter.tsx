import { useRef, useEffect } from 'react';

interface TutorialFooterProps {
    isLastSlide: boolean;
    onContinue: () => void;
}

const TutorialFooter = ({ isLastSlide, onContinue }: TutorialFooterProps) => {
    const continueButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (continueButtonRef.current) {
            if (isLastSlide) {
                continueButtonRef.current.style.backgroundColor = 'white';
                continueButtonRef.current.style.color = 'black';
            } else {
                continueButtonRef.current.style.backgroundColor = '';
                continueButtonRef.current.style.color = '';
            }
        }
    }, [isLastSlide]);

    return (
        <footer>
            <button
                aria-label="Get a reality check"
                className="border border-white rounded-md w-full p-4 continue cursor-pointer"
                onClick={onContinue}
                ref={continueButtonRef}>
                Continue
            </button>
        </footer>
    );
};

export default TutorialFooter;
