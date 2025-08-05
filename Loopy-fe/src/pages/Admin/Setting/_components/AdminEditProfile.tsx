import CommonSideBar from '../../../../components/admin/sideBar/CommonSideBar';
import CommonTopBar from '../../../../components/admin/topBar/CommonTopBar';

interface Props {
  onBack: () => void;
}

const AdminEditProfile = ({ onBack }: Props) => {
  return (
    <div className="w-full min-h-screen flex font-suit text-[#252525]">
      <CommonSideBar />

      <div className="flex-1 flex flex-col ml-[12.875rem]">
        <CommonTopBar title="매장정보 수정" profileImageUrl="" onBack={onBack}/>
      </div>
    </div>
  );
};

export default AdminEditProfile;
