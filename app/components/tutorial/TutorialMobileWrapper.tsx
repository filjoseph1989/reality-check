interface TutorialMobileWrapperProps {
    children: React.ReactNode;
}

const TutorialMobileWrapper = ({ children }: TutorialMobileWrapperProps) => {
    return (
        <div className="mobile-wrap">
            <div className="mobile clearfix">
                {children}
            </div>
        </div>
    );
};

export default TutorialMobileWrapper;
