interface FooterProps {
  onGetStarted: () => void;
}

const Footer = ({ onGetStarted }: FooterProps) => {
  return (
    <footer>
      <button
        aria-label="Get a reality check"
        onClick={onGetStarted}
        className="border border-white rounded-md w-full p-4 continue cursor-pointer get-reality-check">Get a reality check
      </button>
    </footer>
  );
};

export default Footer;