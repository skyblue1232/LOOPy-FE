import CommonHeader from '../../../components/header/CommonHeader';
import { useNavigate } from 'react-router-dom';
import AlarmCard from './components/AlarmCard';
import { mockAlarmData } from './mock/mockData';
import dayjs from 'dayjs';

const AlarmPage = () => {
  const navigate = useNavigate();

  const now = dayjs();

  // 오늘 알림 필터링
  const todayAlarms = mockAlarmData.filter((alarm) =>
    dayjs(alarm.createdAt).isSame(now, 'day'),
  );

  // 최근 7일 알림 필터링 (오늘 제외)
  const recentWeekAlarms = mockAlarmData.filter(
    (alarm) =>
      dayjs(alarm.createdAt).isAfter(now.subtract(7, 'day')) &&
      !dayjs(alarm.createdAt).isSame(now, 'day'),
  );

  return (
    <div className="p-4">
      <CommonHeader title="알림" onBack={() => navigate(-1)} />

      {/* 오늘 알림 섹션 */}
      <section>
        <p className="text-[1.125rem] font-bold mt-4 mb-2">오늘</p>
        {todayAlarms.length > 0 ? (
          todayAlarms.map((alarm, index) => (
            <AlarmCard key={index} alarm={alarm} />
          ))
        ) : (
          <p className="text-sm text-gray-500">오늘 온 알림이 없습니다.</p>
        )}
      </section>

      {/* 최근 7일 알림 섹션 */}
      <section>
        <p className="text-[1.125rem] font-bold mt-6 mb-2">최근 7일</p>
        {recentWeekAlarms.length > 0 ? (
          recentWeekAlarms.map((alarm, index) => (
            <AlarmCard key={index} alarm={alarm} />
          ))
        ) : (
          <p className="text-sm text-gray-500">
            최근 7일간 온 알림이 없습니다.
          </p>
        )}
      </section>
    </div>
  );
};

export default AlarmPage;
