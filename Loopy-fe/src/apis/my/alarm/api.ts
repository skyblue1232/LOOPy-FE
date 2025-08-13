import axiosInstance from "../../axios";
import type { NotificationListItem, MyNotificationListSuccess, NotificationDetail, NotificationDetailSuccess, NotificationType } from "./type";

function buildMyNotificationsMock(): NotificationListItem[] {
  const now = Date.now();
  const mkDate = (minAgo: number) => new Date(now - minAgo * 60_000).toISOString();

  const items: NotificationListItem[] = [
    {
      notificationId: 42,
      cafeId: 3,
      cafeName: "루피커피",
      title: "스탬프 적립 조건이 변경됐어요!",
      content: "8월 1일부터 스탬프는 5,000원 이상 결제 시 적립됩니다.",
      type: "cafe" as NotificationType,
      isRead: false,
      createdAt: mkDate(10),
    },
    {
      notificationId: 41,
      cafeId: 2,
      cafeName: "프렌즈라떼",
      title: "쿠폰 만료 임박 안내",
      content: { couponId: 99, expiresAt: mkDate(1440) }, 
      type: "cafe",
      isRead: true,
      createdAt: mkDate(60 * 24 + 5),
    },
    {
      notificationId: 40,
      cafeId: 1,
      cafeName: "모카마을",
      title: "여름 한정 메뉴 출시",
      content: "망고 라떼 출시! 이번 주만 20% 할인",
      type: "cafe",
      isRead: true,
      createdAt: mkDate(60 * 24 * 3),
    },
  ];

  return items.sort(
    (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)
  );
}

export function buildNotificationMock(notificationId: number): NotificationDetail {
  const cafes = [
    { id: 1, name: "루피커피", address: "서울시 성북구 성북로 123" },
    { id: 2, name: "프렌즈라떼", address: "서울시 관악구 대학길 45" },
    { id: 3, name: "모카마을", address: "서울시 동작구 카페로 9" },
  ];
  const pick = cafes[(Math.abs(notificationId) || 1) % cafes.length];

  return {
    notificationId,
    type: "cafe",
    createdAt: new Date().toISOString(),
    cafe: pick,
  };
}

export async function getMyNotifications(): Promise<NotificationListItem[]> {
  const url = `/api/v1/users/me/notification`;
  try {
    const res = await axiosInstance.get<MyNotificationListSuccess>(url);
    const list = res.data?.data ?? [];
    return [...list].sort(
      (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)
    );
  } catch (err) {
    console.warn("[getMyNotifications] 서버 실패로 목데이터 반환:", err);
    return buildMyNotificationsMock();
  }
}

export async function getNotificationDetail(notificationId: number): Promise<NotificationDetail> {
  const url = `/api/v1/notification/${notificationId}`;
  try {
    const res = await axiosInstance.get<NotificationDetailSuccess>(url);
    return res.data.data;
  } catch (err) {
    console.warn("[getNotificationDetail] 서버 실패로 목데이터 반환:", err);
    return buildNotificationMock(notificationId);
  }
}

export const MY_NOTIFICATIONS_QK = ["my", "notifications"] as const;

export const NOTIFICATION_DETAIL_QK = (notificationId: number) =>
  ["my", "notification", notificationId] as const;
