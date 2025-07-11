import { useNavigate } from 'react-router-dom';

interface MyStampProps {
  cafeId: string;
  imageUrl?: string;
  cafeName: string;
  address: string;
  stampCount: number;
  stampMax: number;
  dueDate: string;
}

const MyStamp: React.FC<MyStampProps> = ({
  cafeId,
  imageUrl,
  cafeName,
  address,
  stampCount,
  stampMax,
  dueDate,
}) => {
  const progressPercent = (stampCount / stampMax) * 100;
  const navigate = useNavigate();

  return (
    <div className="relative w-[21.563rem] h-[11.125rem] flex items-center justify-between p-4 overflow-hidden">
      {/* 스탬프 영역 */}
      <div className="absolute w-[16.375rem] h-[5.125rem] rounded-br-[6.25rem] top-0 right-0 bg-[#E3F389] px-4 py-3 flex flex-col items-end justify-center">
        {/* 스탬프 개수 + 화살표 */}
        <div className="absolute top-[0.938rem] left-[6.25rem] flex items-center gap-10 text-base font-semibold text-black">
          <span>스탬프 {stampCount}개</span>
          <span
            className="text-lg cursor-pointer"
            onClick={() => navigate(`/mystamppage/${cafeId}`)}
          >
            →
          </span>
        </div>

        {/* 퍼센트 바 + 텍스트 */}
        <div className="absolute top-[2.813rem] left-[6.25rem] flex items-center gap-2 mt-1">
          <div className="w-[4.313rem] h-[0.5rem] bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#6970F3] rounded-full"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <div className="text-xs text-black">
            {stampCount}/{stampMax}
          </div>
        </div>
      </div>

      {/* 이미지 */}
      <div className="absolute top-0 left-0 w-[10.25rem] h-[10.5rem] rounded-full overflow-hidden bg-gray-200">
        {imageUrl ? (
          <img src={imageUrl} className="w-full h-full object-cover" />
        ) : null}
      </div>

      {/* 연한 부채꼴 */}
      <div className="absolute w-[10rem] h-[10rem] rounded-full bg-[#E3F389] opacity-30 top-25 right-0"></div>

      {/* 카페 정보 */}
      <div className="absolute left-[5.125rem] top-[5.25rem] w-[11.875rem] h-[6.25rem] bg-white p-3.5">
        <div className="text-[1rem] font-semibold">{cafeName}</div>
        <div className="text-[0.75rem] text-[#7F7F7F] ">{address}</div>
        <div className="text-[0.875rem] font-semibold text-[#6970F3] mt-1">
          기한 ~{dueDate}
        </div>
      </div>
    </div>
  );
};

export default MyStamp;
