interface Props {
  onNavigate: (step: number) => void;
}

const QuickAccessMenu = ({ onNavigate }: Props) => {
  const menus = [
    { label: '스탬프 환전', step: 2 },
    { label: '챌린지', step: 3 },
    { label: '쿠폰함', step: 4 },
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
