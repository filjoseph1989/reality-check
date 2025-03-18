interface FormFooterProps {
    isVisible: boolean;
    onContinue: () => void;
}

export default function FormFooter({ isVisible, onContinue }: FormFooterProps) {
    return (
        <footer>
            {isVisible && (
                <button
                    aria-label="Get a reality check"
                    className="border border-white rounded-md w-full p-4 continue continue-final cursor-pointer"
                    onClick={onContinue}> Continue
                </button>
            )}
        </footer>
    );
}
