import LevelOne from "../../../../assets/images/LevelOne.svg?react";
import LevelTwo from "../../../../assets/images/LevelTwo.svg?react";
import LevelThree from "../../../../assets/images/LevelThree.svg?react";
import type { JSX } from "react";

const LEVEL_ICONS: Record<number, JSX.Element> = {
  1: <LevelOne className="w-[4.5rem] h-[4.5rem]" />,
  2: <LevelTwo className="w-[4.5rem] h-[4.5rem]" />,
  3: <LevelThree className="w-[4.5rem] h-[4.5rem]" />,
};

export const ProfileHeader = ({ nickname, levelLabel, level, qrCodeImg, onQrClick }: any) => (
  <div className="flex gap-[1rem] w-full">
    {LEVEL_ICONS[level] || LEVEL_ICONS[1]}
    <div className="flex flex-1 justify-between items-center">
      <div className="flex flex-col gap-[0.5rem]">
        <p className="text-[1.125rem] font-bold">{nickname}</p>
        <span className="text-[0.875rem] border border-[#DFDFDF] px-[1rem] py-[0.25rem] rounded-[4px]">
          {levelLabel}
        </span>
      </div>
      <div
        className="flex flex-col items-center gap-[0.25rem] ml-[0.5rem] cursor-pointer pt-[0.125rem]"
        onClick={onQrClick}
      >
        {qrCodeImg ? (
          <img src={qrCodeImg} alt="QR" className="w-[2.5rem] h-[2.5rem]" />
        ) : (
          <div className="w-[2.5rem] h-[2.5rem] bg-gray-200 rounded-md" />
        )}
        <p className="text-[0.688rem] font-semibold">멤버십 QR</p>
      </div>
    </div>
  </div>
);
