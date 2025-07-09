import { useNavigate } from 'react-router-dom';
import CommonHeader from '../../../components/header/CommonHeader';

const LevelDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <CommonHeader title="루피 레벨 안내" onBack={() => navigate(-1)} />
      <div className="flex items-center mt-4">
        {/* 좌측 이미지 */}
        <img className="w-[7.5rem] h-[6.75rem] object-cover rounded-sm mr-4" />
        {/* 중앙 텍스트 */}
        <div>
          <div className="flex gap-[8px]">
            <div className="w-[2.875rem] h-[1.375rem] p-1 bg-[#F0F1FE] text-[#6970F3] rounded-sm font-semibold text-sm flex items-center justify-center leading-none">
              1단계
            </div>
            <div className="text-[1.125rem] font-bold mb-1">
              호기심 많은 탐색가
            </div>
          </div>
          <div className="text-base font-medium text-[#6970F3]">
            스탬프지 0장~3장
          </div>
          <div className="w-[13.063rem] text-sm font-normal text-[#7F7F7F] mt-1">
            다양한 카페를 체험하며 루틴을 탐색하는 단계, 루피 여정을 시작한
            사용자
          </div>
        </div>
      </div>
      <div className="flex items-center mt-4">
        {/* 좌측 이미지 */}
        <img className="w-[7.5rem] h-[6.75rem] object-cover rounded-sm mr-4" />
        {/* 중앙 텍스트 */}
        <div>
          <div className="flex gap-[8px]">
            <div className="w-[2.875rem] h-[1.375rem] p-1 bg-[#F0F1FE] text-[#6970F3] rounded-sm font-semibold text-sm flex items-center justify-center leading-none">
              2단계
            </div>
            <div className="text-[1.125rem] font-bold mb-1">
              차곡차곡 쌓는 수집가
            </div>
          </div>
          <div className="text-base font-medium text-[#6970F3]">
            스탬프지 4장~9장
          </div>
          <div className="w-[13.063rem] text-sm font-normal text-[#7F7F7F] mt-1">
            마음에 드는 카페를 골라가며 나만의 루틴을 쌓는 단계, 스탬프 하나하나
            모으는 재미에 빠져보세요
          </div>
        </div>
      </div>
      <div className="flex items-center mt-4">
        {/* 좌측 이미지 */}
        <img className="w-[7.5rem] h-[6.75rem] object-cover rounded-sm mr-4" />
        {/* 중앙 텍스트 */}
        <div>
          <div className="flex gap-[8px]">
            <div className="w-[2.875rem] h-[1.375rem] p-1 bg-[#F0F1FE] text-[#6970F3] rounded-sm font-semibold text-sm flex items-center justify-center leading-none">
              3단계
            </div>
            <div className="text-[1.125rem] font-bold mb-1">
              든든한 베스트프렌드
            </div>
          </div>
          <div className="text-base font-medium text-[#6970F3]">
            스탬프지 10장~19장
          </div>
          <div className="w-[13.063rem] text-sm font-normal text-[#7F7F7F] mt-1">
            루피를 꾸준히 이용하며 관계가 끈끈해지고 있는 단계, 로컬 카페와
            루피의 소중한 단골이 되었어요
          </div>
        </div>
      </div>
      <div className="flex items-center mt-4">
        {/* 좌측 이미지 */}
        <img className="w-[7.5rem] h-[6.75rem] object-cover rounded-sm mr-4" />
        {/* 중앙 텍스트 */}
        <div>
          <div className="flex gap-[8px]">
            <div className="w-[2.875rem] h-[1.375rem] p-1 bg-[#F0F1FE] text-[#6970F3] rounded-sm font-semibold text-sm flex items-center justify-center leading-none">
              4단계
            </div>
            <div className="text-[1.125rem] font-bold mb-1">커피왕 루피</div>
          </div>
          <div className="text-base font-medium text-[#6970F3]">
            스탬프지 20장 이상
          </div>
          <div className="w-[13.063rem] text-sm font-normal text-[#7F7F7F] mt-1">
            카페 단골, 루피 단골! 우리 동네 커피 박사
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelDetailPage;
