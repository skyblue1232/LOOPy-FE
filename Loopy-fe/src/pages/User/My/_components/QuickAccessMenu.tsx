import type { MyPageStep } from "../../../../types/mySteps";

interface Props {
  onNavigate: (step: MyPageStep) => void;
}

const QuickAccessMenu = ({ onNavigate }: Props) => {
  const menus: { label: string; step: MyPageStep }[] = [
    { label: '스탬프 환전', step: "stampExchange" },
    { label: '챌린지', step: "myChallenge" },
    { label: '쿠폰함', step: "couponBox" },
  ];

  return (
    <div className="mt-4 rounded-xl flex justify-between">
      {menus.map(({ label, step }) => (
        <div
          key={label}
          className="px-[0.625rem] py-[0.75rem] bg-[#F3F3F3] rounded-[8px]"
        >
          <button
            onClick={() => onNavigate(step)}
            className="w-[4.625rem] flex flex-col items-center justify-center"
          >
            <div className="w-[3rem] h-[3rem] bg-red-500 rounded-full" />
            <span className="text-[0.875rem] font-semibold text-[#252525] mt-[0.5rem]">
              {label}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default QuickAccessMenu;
