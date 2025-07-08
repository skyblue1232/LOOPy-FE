import { useNavigate } from 'react-router-dom';
import CommonHeader from '../../../components/header/CommonHeader';

const ChallengePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <CommonHeader title="챌린지" onBack={() => navigate(-1)} />
    </div>
  );
};

export default ChallengePage;
