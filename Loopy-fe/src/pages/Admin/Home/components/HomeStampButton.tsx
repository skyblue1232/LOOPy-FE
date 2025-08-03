import AdminStampIcon from '../../../../assets/images/AdminStampIcon.svg?react';
import HomeButton from '../components/HomeButton';

const HomeStampButton = () => {
  return (
    <HomeButton
      Icon={AdminStampIcon}
      label="스탬프 적립"
      onClick={() => console.log('스탬프 적립')}
      aria-label="스탬프 적립 버튼"
    />
  );
};

export default HomeStampButton;
