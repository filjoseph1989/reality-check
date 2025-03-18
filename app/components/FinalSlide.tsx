interface FinalSlideProps {
    userName: string;
}

export default function FinalSlide({ userName }: FinalSlideProps) {
    return (
        <div className="text-input-section">
            <p>Thanks {userName}! Now, it's time to get a reality check</p>
            <p className="mt-4">This will take 2-3 minutes</p>
        </div>
    );
}
