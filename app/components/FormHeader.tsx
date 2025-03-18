import Image from 'next/image';
import refreshIcon from '../../public/refresh.svg';
import juiceBox from '../../public/juicebox.svg';
import arrow from '../../public/arrow.svg';

interface FormHeaderProps {
    onBack: () => void;
    onRefresh: () => void;
}

export default function FormHeader({ onBack, onRefresh }: FormHeaderProps) {
    return (
        <header>
            <nav>
                <div>
                    <div>
                        <div className="back-button-container" onClick={onBack}>
                            <Image src={arrow} alt="Back Icon" />
                        </div>
                    </div>
                    <div>
                        <Image src={juiceBox} alt="Juicebox Icon" />
                    </div>
                    <div>
                        <div>
                            <Image src={refreshIcon} alt="Refresh Icon" onClick={onRefresh} />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
