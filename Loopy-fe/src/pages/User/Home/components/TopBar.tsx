import Bell from '../../../../assets/images/Bell.svg';
import Bookmark from '../../../../assets/images/Bookmark.svg';
import LoopyIconGreen from '../../../../assets/images/LoopyIconGreen.svg';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-12 bg-transparent flex items-center justify-between px-1">
      <div>
        <img src={LoopyIconGreen} alt="logo" className="w-6 h-6" />
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => navigate('/bookmark')}>
          <img src={Bookmark} alt="bookmark" className="w-6 h-6" />
        </button>

        <button onClick={() => navigate('/alarm')}>
          <img src={Bell} alt="bell" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
