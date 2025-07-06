import CommonHeader from '../../../components/header/CommonHeader';
import { useNavigate } from 'react-router-dom';

const AlarmPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <CommonHeader title="알림" onBack={() => navigate(-1)} />
    </div>
  );
};

export default AlarmPage;
