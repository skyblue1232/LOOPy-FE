import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonHeader from '../../../components/header/CommonHeader';
import CafeListCard from '../../../components/card/CafeListCard';
import BookMarkPageSkeleton from './Skeleton/BookMarkSkeleton';

interface Cafe {
  id: number;
  name: string;
  lat: number;
  lng: number;
  hasStamp: boolean;
}

const dummyCafes: Cafe[] = [
  { id: 1, name: '카페 A', lat: 37.5563, lng: 126.9355, hasStamp: false },
  { id: 2, name: '카페 B', lat: 37.5558, lng: 126.937, hasStamp: true },
  { id: 3, name: '카페 C', lat: 37.5545, lng: 126.9362, hasStamp: false },
  { id: 4, name: '카페 D', lat: 37.553, lng: 126.938, hasStamp: true },
  { id: 5, name: '카페 E', lat: 37.552, lng: 126.939, hasStamp: false },
  { id: 6, name: '카페 F', lat: 37.551, lng: 126.94, hasStamp: true },
  { id: 7, name: '카페 G', lat: 37.55, lng: 126.941, hasStamp: false },
  { id: 8, name: '카페 H', lat: 37.549, lng: 126.942, hasStamp: true },
];

const cafeMockDetail = {
  distanceText: '500m',
  address: '서울 서대문구 이화여대길 52',
  images: [
    'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80',
  ],

  keywords: ['분위기좋음', '조용한'],
};

const BookMarkPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // 1초 후 로딩 해제
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <BookMarkPageSkeleton />;
  }

  return (
    <div className="mb-8">
      <CommonHeader title="북마크한 카페" onBack={() => navigate(-1)} />
      <div className="mt-[1.5rem] flex flex-col gap-6">
        {dummyCafes.map((cafe) => (
          <CafeListCard
            key={cafe.id}
            id={cafe.id}
            name={cafe.name}
            distanceText={cafeMockDetail.distanceText}
            address={cafeMockDetail.address}
            images={cafeMockDetail.images}
            keywords={cafeMockDetail.keywords}
          />
        ))}
      </div>
    </div>
  );
};

export default BookMarkPage;
