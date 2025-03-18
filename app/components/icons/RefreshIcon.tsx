import Image from 'next/image';
import refreshIcon from '../../../public/refresh.svg';

interface RefreshIconProps {
    onClick: () => void;
}

const RefreshIcon = ({ onClick }: RefreshIconProps) => {
    return <Image src={refreshIcon} alt="Refresh Icon" onClick={onClick} />;
};

export default RefreshIcon;
