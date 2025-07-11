import type { CafeDetailData } from "../types/cafeData";

export const cafeDetailMock: CafeDetailData & {
    distanceText: string;
    images: string[];
} = {
    name: "카페 위니",
    address: "서울시 마포구 양화로 12길 34",
    distanceText: "500m",
    images: [
        "src/assets/images/CafePic.svg",
        "src/assets/images/CafePic2.svg",
        "src/assets/images/CafePic3.svg",
        "src/assets/images/CafePic2.svg",
        "src/assets/images/CafePic3.svg",
    ],
    tags: [
        "24시간 운영",
        "와이파이 제공",
        "애견 동반",
        "주차 가능",
        "1인석",
        "텀블러 할인",
        "포장 할인",
        "저당/무가당",
    ],
    keywords: ["분위기좋음", "조용한"],
    phone: "02-123-4567",
    instagram: "@solhyang_cafe",
    description:
        "향긋한 원두 향이 가득한 브런치 겸용 카페입니다. 천장 높은 통창과 다양한 식물 인테리어로 아늑한 분위기를 느낄 수 있어요. 평일 오전에는 조용하게 작업하기에도 좋아요.",
    hours: [
        { day: "월", time: "10:00 – 20:00 (19:30 라스트오더)" },
        { day: "화", time: "10:00 – 20:00 (19:30 라스트오더)" },
        { day: "수", time: "10:00 – 20:00 (19:30 라스트오더)" },
        { day: "목", time: "10:00 – 20:00 (19:30 라스트오더)" },
        { day: "금", time: "10:00 – 20:00 (19:30 라스트오더)" },
        { day: "토", time: "11:00 – 19:00 (18:30 라스트오더)" },
        { day: "일", time: "정기 휴무 (매주 일요일)" },
    ],
    menus: [
        {
        name: "아이스 아메리카노",
        description: "시원한 얼음과 함께 즐기는 진한 에스프레소",
        price: "₩3,800",
        imageSrc: "/src/assets/images/sample_menu1.jpg",
        },
        {
        name: "말차 라떼",
        description: "쌉쌀하고 고소한 프리미엄 말차",
        price: "₩4,200",
        imageSrc: "/src/assets/images/sample_menu2.jpg",
        },
        {
        name: "딸기 라떼",
        description: "생딸기 베이스의 달콤한 라떼",
        price: "₩4,500",
        imageSrc: "/src/assets/images/sample_menu3.jpg",
        },
    ],
    reviews: [
        {
        id: 1,
        user: {
            profileImage: "/src/assets/images/RedImage.svg",
            nickname: "루피2025",
            stampStatus: "스탬프지 5장 적립 중",
        },
        date: "08.15.금",
        images: [
            "/src/assets/images/CafePic.svg",
            "/src/assets/images/CafePic2.svg",
            "/src/assets/images/CafePic3.svg",
            "/src/assets/images/CafePic.svg",
            "/src/assets/images/CafePic2.svg",
        ],
        content:
            "여기 시그니처 메뉴인 솔티드 카라멜 라떼가 진짜 미쳤어요. 매장이 맛있고 음료가 예뻐서 단골되려고요!",
        },
        {
        id: 2,
        user: {
            profileImage: "/src/assets/images/RedImage.svg",
            nickname: "우솝",
            stampStatus: "스탬프지 2장 적립 중",
        },
        date: "08.16.토",
        images: [
            "/src/assets/images/CafePic.svg",
            "/src/assets/images/CafePic2.svg",
            "/src/assets/images/CafePic3.svg",
        ],
        content:
            "분위기 너무 좋고 직원분들도 친절했어요. 다음엔 다른 메뉴도 먹어보려구요!",
        },
    ],
};
