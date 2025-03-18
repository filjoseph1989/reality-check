import Image from 'next/image';
import juiceBox from '../../public/juicebox.svg';
import refreshIcon from '../../public/refresh.svg';

interface HeaderProps {
  onRefresh: () => void;
}

const Header = ({ onRefresh }: HeaderProps) => {
  return (
    <header>
      <nav>
        <div>
          <div>
            <div></div>
          </div>
          <div>
            <Image src={juiceBox} alt="Icon" />
          </div>
          <div className='p-1'>
            <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
              <Image src={refreshIcon} alt="Icon" onClick={onRefresh} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;