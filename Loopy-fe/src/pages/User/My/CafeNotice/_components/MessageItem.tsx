import { useState, useRef, useEffect } from "react";
import CommonCard from "../../../../../components/card/CommonCard";
import Toggle from "../../../../../assets/images/Toggle.svg?react";

interface MessageItemProps {
  sender: string;
  avatar: string;
  content: string;
  date: string;
  isNew: boolean;
}

const MessageItem = ({ sender, avatar, content, date, isNew }: MessageItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    }
  }, [content]);

  const cardBg = isNew ? "bg-[#F0F1FE]" : "bg-[#F3F3F3]";

  return (
    <CommonCard padding="p-4" className={`relative ${cardBg}`}>
      <div className="flex gap-2 items-start">
        {avatar ? (
          <img
            src={avatar}
            alt="avatar"
            className="w-6 h-6 rounded-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.nextElementSibling?.classList.remove("hidden");
            }}
          />
        ) : null}
        <div className={avatar ? "hidden w-6 h-6 rounded-full bg-[#434343]" : "w-6 h-6 rounded-full bg-[#434343]"} />

        <div className="flex flex-col w-full">
          <p className="text-[1rem] font-semibold text-[#252525] mb-1">{sender}</p>
          <div className="relative">
            <div
              ref={textRef}
              className={`text-[0.875rem] text-[#252525] font-normal whitespace-pre-line pr-[4.5rem] ${
                isExpanded ? "" : "line-clamp-2"
              }`}
            >
              {content}
            </div>
            <span className="absolute bottom-0 right-0 text-[0.75rem] text-[#7F7F7F] font-normal whitespace-nowrap">
              {date}
            </span>
          </div>

          {(isOverflowing || isExpanded) && (
            <button
              className="flex items-center text-[0.875rem] font-normal text-[#A8A8A8] mt-1 self-start"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "접기" : "더보기"}
              <Toggle
                className={`w-[0.625rem] h-[0.625rem] ml-1 transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          )}
        </div>
      </div>

      {isNew && (
        <span className="absolute top-4 right-4 w-[6px] h-[6px] bg-[#FF2E00] rounded-full" />
      )}
    </CommonCard>
  );
};

export default MessageItem;