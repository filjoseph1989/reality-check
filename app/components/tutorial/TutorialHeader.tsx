import BackIcon from "../icons/BackIcon";
import JuiceBoxIcon from "../icons/JuiceBoxIcon";
import RefreshIcon from "../icons/RefreshIcon";

interface TutorialHeaderProps {
  onRefresh: () => void;
  onBack: () => void;
}

const TutorialHeader = ({ onRefresh, onBack }: TutorialHeaderProps) => {
  return (
    <header>
      <nav>
        <div>
          <div>
            <div className="back-button-container" onClick={onBack}>
              <BackIcon />
            </div>
          </div>
          <div>
            <JuiceBoxIcon />
          </div>
          <div>
            <div>
              <RefreshIcon onClick={onRefresh} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TutorialHeader;