import Step10 from '../../../../assets/images/Step10.svg?react';
import Vector from '../../../../assets/images/Vector.svg?react';

interface StampProps {
  currentStep: number; // 1~9
}

const StampPaper: React.FC<StampProps> = ({ currentStep }) => {
  const positions = [
    { top: 345.44, left: 192 }, // 1
    { top: 360.44, left: 67 }, // 2
    { top: 273.44, left: 158 }, // 3
    { top: 186.44, left: 247 }, // 4
    { top: 203.44, left: 119 }, // 5
    { top: 210.44, left: 2 }, // 6
    { top: 130.44, left: 86 }, // 7
    { top: 84.44, left: 190 }, // 8
    { top: -6, left: 204.31 }, // 9
  ];

  return (
    <div className="relative w-[307px] h-[426.44px] mx-auto my-auto">
      {/* 스탬프지 배경 */}
      <Vector
        className="absolute top-0 left-0"
        style={{
          width: 307,
          height: 426.4375,
          pointerEvents: 'none',
          objectFit: 'contain',
        }}
      />
      {/* 각 스텝 */}
      {positions.map((pos, index) => {
        const step = index + 1;
        const isDone = step <= currentStep;

        return (
          <div
            key={step}
            className="absolute z-20"
            style={{
              top: `${pos.top}px`,
              left: `${pos.left}px`,
              width: '56px',
              height: '56px',
            }}
          >
            {isDone ? (
              <div className="w-full h-full rounded-full border-[5px] border-[#DFDFDF] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=400&q=80"
                  alt={`Step ${step}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-full rounded-full flex items-center justify-center text-white text-[1.25rem] font-bold border-[5px] border-[#DFDFDF] bg-[#A8A8A8]">
                {step}
              </div>
            )}
          </div>
        );
      })}

      {/* 10단계 아이콘 */}
      <Step10
        className="absolute z-30"
        style={{
          top: `14px`,
          left: `85px`,
          width: '85px',
          height: '85px',
        }}
      />
    </div>
  );
};

export default StampPaper;
