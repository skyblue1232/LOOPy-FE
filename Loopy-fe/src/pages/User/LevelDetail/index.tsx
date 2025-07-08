import { useNavigate } from 'react-router-dom';
import CommonHeader from '../../../components/header/CommonHeader';

const LevelDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <CommonHeader title="루피 레벨 안내" onBack={() => navigate(-1)} />
    </div>
  );
};

export default LevelDetailPage;
