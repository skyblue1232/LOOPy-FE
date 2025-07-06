import { useNavigate } from 'react-router-dom';
import CommonHeader from '../../../components/header/CommonHeader';
const BookMarkPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <CommonHeader title="북마크한 카페" onBack={() => navigate(-1)} />
    </div>
  );
};

export default BookMarkPage;
