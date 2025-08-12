import { useState, useEffect, useMemo} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCafeListQuery } from '../../../hooks/query/cafe/useCafeList';
import { serializeForListBody, serializeFromTitlesToParams } from '../../../features/filter/filterMapping';
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
    setIsMapView(false);
  }, []);

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

  // 지역 지정 여부: selected가 있으면 지역 지정, 없으면 전국 검색
  const regionAssigned = !!selected;
  const baseX = selected?.lng ?? 126.9368;
  const baseY = selected?.lat ?? 37.5553;
  const baseZoom = regionAssigned ? 3 : 6; // 지역 지정=근거리, 미지정=전국

  // 리스트용 바디
  const listBody = useMemo(() => {
    const base = serializeForListBody(selectedByGroup);
    return selected?.addressInfo ? { ...base, addressInfo: selected.addressInfo } : base;
  }, [selectedByGroup, selected?.addressInfo, selected?.updatedAt]); 

  // 리스트용 쿼리
  const listQuery = useMemo(() => ({
    x: baseX,
    y: baseY,
    searchQuery: searchValue || undefined,
    cursor: undefined as number | undefined,
  }), [baseX, baseY, searchValue, selected?.updatedAt]);

  // 리스트 호출: data 이름을 listRes로 변경
  const { data: listRes, isLoading: isQueryLoading } = useCafeListQuery(listQuery, listBody, {
    enabled: !!baseX && !!baseY,
  });

  // 최종 로딩 플래그
  const loading = isLoading || isQueryLoading;

  // 리스트 결과
  const cafes = listRes?.success?.data ?? [];
  
  // 2번 API 쿼리 스냅샷 (store/menu/takeout은 콤마 문자열)
  const mapQuerySnapshot = useMemo(() => {
    const p = serializeFromTitlesToParams(selectedByGroup);
    return {
      x: baseX,
      y: baseY,
      zoom: baseZoom,
      store: p.store?.join(','),
      menu: p.menu?.join(','),
      takeout: p.takeout?.join(','),
    };
  }, [baseX, baseY, baseZoom, selectedByGroup]);

  // 동일 집합 보장용 id 세트 + isStamped 스냅샷
  const listIds = useMemo(() => cafes.map(c => c.id), [cafes]);
  const stampById = useMemo(
    () => Object.fromEntries(cafes.map(c => [c.id, !!c.isStamped])),
    [cafes]
  );

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
              {loading ? (
                <LocationLabelSkeleton />
              ) : (
                <LocationLabel 
                  dongName={selected ? selected.region : '위치를 설정해주세요'}
                  isPlaceholder={!selected} 
                />
              )}
            </div>

            <div className="mt-[1rem] flex flex-col gap-[1.25rem]">
              {loading
                ? Array.from({ length: 5 }).map((_, i) => <CafeListCardSkeleton key={i} />)
                : cafes.map((cafe) => (
                    <CafeListCard
                      key={cafe.id}
                      id={cafe.id}
                      name={cafe.name}
                      distanceText={cafeMockDetail.distanceText} // 상세 API 붙기 전 임시
                      address={cafe.address}
                      images={(cafe.photos ?? []).map(p => p.photoUrl || p.url || '').filter(Boolean)}
                      keywords={cafe.keywords ?? []}
                      onClick={() =>
                        navigate('/map', {
                          state: {
                            listParams: mapQuerySnapshot, // x,y,zoom,store,menu,takeout
                            listIds,                      // 동일 집합 보장
                            stampById,                    // isStamped 스냅샷
                            focusCafeId: cafe.id,         // 맵 최초 포커스
                          },
                        })
                      }
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
                onClick={() =>
                  navigate('/map', {
                    state: { listParams: mapQuerySnapshot, listIds, stampById },
                  })
                }
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
