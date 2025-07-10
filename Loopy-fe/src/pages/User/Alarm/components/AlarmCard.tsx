import React from 'react';
import dayjs from 'dayjs';
import type { AlarmCardData } from '../mock/mockData';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

interface AlarmCardProps {
  alarm: AlarmCardData;
}

const getTimeAgo = (createdAt: string) => {
  const now = dayjs();
  const created = dayjs(createdAt);
  const diffMinutes = now.diff(created, 'minute');
  const diffHours = now.diff(created, 'hour');
  const diffDays = now.diff(created, 'day');

  if (diffMinutes < 60) return `${diffMinutes}분 전`;
  else if (diffHours < 24) return `${diffHours}시간 전`;
  else return `${diffDays}일 전`;
};

const AlarmCard: React.FC<AlarmCardProps> = ({ alarm }) => {
  const { AlarmContent, isRead, createdAt } = alarm;
  const timeAgo = getTimeAgo(createdAt);

  return (
    <div
      className={`relative w-full h-[5rem] p-4 mb-[0.5rem] rounded-lg whitespace-pre-line
      ${isRead ? 'bg-[#F3F3F3]' : 'bg-[#F0F1FE]'} 
      flex items-center`}
    >
      {/* 빨간 점 (읽지 않은 경우만 표시) */}
      {!isRead && (
        <span className="absolute top-5 right-4 w-[0.25rem] h-[0.25rem] bg-red-500 rounded-full" />
      )}

      {/* 텍스트와 시간 컨테이너 */}
      <div className="flex-1 flex justify-between items-end">
        {/* 알림 내용 */}
        <p className="text-sm text-gray-800 whitespace-pre-wrap ">
          {AlarmContent}
        </p>

        {/* 시간 표시 (텍스트 마지막 줄 옆 하단) */}
        <p className="text-[0.75rem] text-[#7F7F7F] ml-2 whitespace-nowrap">
          {timeAgo}
        </p>
      </div>
    </div>
  );
};

export default AlarmCard;
