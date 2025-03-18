import React from 'react'; // Ensure React is imported if using JSX

interface FooterProps {
  isVisible?: boolean; // Optional prop to control visibility (defaults to true)
  label: string; // Button label (e.g., "Get a reality check" or "Continue")
  onAction: () => void; // Unified callback for both onGetStarted and onContinue
  ariaLabel?: string; // Optional aria-label for accessibility
  className?: string; // Optional additional className for styling
}

const Footer = ({
  isVisible = true,
  label,
  onAction,
  ariaLabel = 'Perform action',
  className = 'border border-white rounded-md w-full p-4 continue cursor-pointer'
}: FooterProps) => {
  return (
    <footer>
      {isVisible && (
        <button
          aria-label={ariaLabel}
          onClick={onAction}
          className={className}>
          {label}
        </button>
      )}
    </footer>
  );
};

export default Footer;