import Image from 'next/image';
import JuiceBoxIcon from './icons/JuiceBoxIcon';
import RefreshIcon from './icons/RefreshIcon';
import BackIcon from './icons/BackIcon'; // dapat e-remove and e-delete ang file
import arrow from '../../public/arrow.svg';

interface HeaderProps {
  onRefresh: () => void;
  onBack?: () => void;
}

const Header = ({ onRefresh, onBack }: HeaderProps) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-item nav-item-1">
            {onBack && (
              <div className="back-button-container" onClick={onBack}>
                <Image src={arrow} alt="Back Icon" />
              </div>
            )}
          </div>
          <div className="nav-item nav-item-2">
            <JuiceBoxIcon />
          </div>
          <div className="nav-item nav-item-3">
            <div>
              <RefreshIcon onClick={onRefresh} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;