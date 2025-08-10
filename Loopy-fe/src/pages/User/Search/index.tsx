import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonBottomBar from '../../../components/bottomBar/CommonBottomBar';
import SearchBar from '../../../components/input/SearchBar';
import FilterBar from '../Map/_components/filter/FilterBar';
import CafeListCard from '../../../components/card/CafeListCard';
import FilterPopup from '../Map/_components/filter/FilterPopup';
import LocationLabel from '../../../components/etc/LocationLabel';
import MapViewToggleButton from '../../../components/button/MapViewToggleButton';
import CafeListCardSkeleton from './Skeleton/CafeListCardSkeleton';
import LocationLabelSkeleton from './Skeleton/LocationLabel';
import { useSelectedLocationStore } from '../../../store/locationStore';
import { useFilterStore } from '../../../store/filterStore';

interface Cafe {
  id: number;
  name: string;
  lat: number;
  lng: number;
  hasStamp: boolean;
}

const dummyCafes: Cafe[] = [
  { id: 1, name: "카페 A", lat: 37.5563, lng: 126.9355, hasStamp: false },
  { id: 2, name: "카페 B", lat: 37.5558, lng: 126.937, hasStamp: true },
  { id: 3, name: "카페 C", lat: 37.5545, lng: 126.9362, hasStamp: false },
  { id: 4, name: '카페 D', lat: 37.5542, lng: 126.9368, hasStamp: true },
  { id: 5, name: '카페 E', lat: 37.5555, lng: 126.938, hasStamp: true },
];

const cafeMockDetail = {
  distanceText: "500m",
  address: "서울 서대문구 이화여대길 52",
  images: ["src/assets/images/CafePic.svg", "/sample2.jpg", "/sample3.jpg"],
  keywords: ["분위기좋음", "조용한"],
};

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<string | undefined>(undefined);
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  const [isMapView, setIsMapView] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();

  const { selected, reset } = useSelectedLocationStore();   // 전역 위치
  const [didUserType, setDidUserType] = useState(false);    // 최초 입력 감지
  const { selectedByGroup, setSelectedByGroup } = useFilterStore(); 

  const handleOpenFilterPopup = (group?: string) => {
    setSelectedGroup(group);
    setIsPopupVisible(true);         
    setTimeout(() => {
      setIsFilterPopupOpen(true);   
    }, 10); 
  };

  const handleCloseFilterPopup = () => {
    setIsFilterPopupOpen(false);     
    setTimeout(() => {
      setIsPopupVisible(false);     
    }, 150); 
  };

  const onChangeKeyword = (v: string) => {
    if (!didUserType) {
      reset();  
      setDidUserType(true);
    }
    setSearchValue(v);
  };

  useEffect(() => {
    if (isFilterPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isFilterPopupOpen]);

  return (
    <>
      <div className="w-full flex justify-center bg-white">
        <div className="w-full h-screen overflow-y-auto custom-scrollbar relative">
          <div className="pt-[1.5rem] pb-[7.5rem]">
            <SearchBar
              value={searchValue}
              onChange={(e) => onChangeKeyword(e.target.value)}
              placeholder="취향에 맞는 카페를 찾아보세요!"
              variant="search"
            />

            <div className="mt-[0.75rem] pb-[1.5rem]">
              <FilterBar onOpenFilterPopup={handleOpenFilterPopup} variant="search" />
            </div>

            <div className="mt-[1.5rem]">
              {isLoading ? (
                <LocationLabelSkeleton />
              ) : (
                <LocationLabel 
                  dongName={selected ? selected.region : '위치를 설정해주세요'}
                  isPlaceholder={!selected} 
                />
              )}
            </div>

            <div className="mt-[1rem] flex flex-col gap-[1.25rem]">
              {isLoading
                ? Array.from({ length: 5 }).map((_, i) => <CafeListCardSkeleton key={i} />)
                : dummyCafes.map((cafe) => (
                    <CafeListCard
                      key={cafe.id}
                      id={cafe.id}
                      name={cafe.name}
                      distanceText={cafeMockDetail.distanceText}
                      address={cafeMockDetail.address}
                      images={cafeMockDetail.images}
                      keywords={cafeMockDetail.keywords}
                      onClick={() => navigate(`/detail`)}
                    />
                ))}
            </div>
          </div>

          <div
            className="
              fixed bottom-[6.25rem]
              right-[1.5rem]                 /* <640px: 전체폭 + 오른쪽 0 */
              sm:left-auto sm:w-auto               /* ≥640px: 내용폭으로 축소 */
              sm:right-[calc((100vw-24.5625rem)/2+1.5rem)]
              z-50 flex justify-end pointer-events-none
            "
          >
            <div className="pointer-events-auto">
              <MapViewToggleButton
                isMapView={isMapView}
                onClick={() => setIsMapView((prev) => !prev)}
              />
            </div>
          </div>

          <CommonBottomBar
            active="search"
            onChange={(tab) => {
              console.log("탭 변경:", tab);
            }}
          />
        </div>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex justify-center">
          <div
            className="
              absolute top-0 bottom-0
              left-0 right-0
              sm:left-[calc((100vw-24.5625rem)/2)]
              sm:right-[calc((100vw-24.5625rem)/2)]
              bg-black/50
              z-[205]
            "
            onClick={handleCloseFilterPopup}
          />

          <div
            className={`
              absolute bottom-0
              left-[1.5rem] right-[1.5rem]
              sm:left-[calc((100vw-24.5625rem)/2)]
              sm:right-[calc((100vw-24.5625rem)/2)]
              transition-transform duration-150 ease-in-out
              ${isFilterPopupOpen ? 'translate-y-0' : 'translate-y-full'}
              z-[210]
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <FilterPopup
              key={selectedGroup ?? 'all'}            
              onClose={handleCloseFilterPopup}
              selectedGroup={selectedGroup}             
              initialSelected={selectedByGroup}      
              onSave={setSelectedByGroup}  
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchPage;
