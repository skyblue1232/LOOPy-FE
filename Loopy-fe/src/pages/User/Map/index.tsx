import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelectedLocationStore } from '../../../store/locationStore';
import { useMapViewStore } from '../../../store/mapviewStore';
import MapViewToggleButton from '../../../components/button/MapViewToggleButton';
import StampLegend from '../../../components/modal/StampLegend';
import CafeDetailCard from '../../../components/card/MapCafeDetailCard';
import SearchBar from '../../../components/input/SearchBar';
import FilterBar from './_components/filter/FilterBar';
import FilterPopup from './_components/filter/FilterPopup';
import { Helmet } from 'react-helmet';
import CommonBottomBar from '../../../components/bottomBar/CommonBottomBar';
import StampActiveMarker from '/src/assets/images/StampActiveMarker.svg';
import StampDefaultMarker from '/src/assets/images/StampDefaultMarker.svg';
import NoStampActiveMarker from '/src/assets/images/NoStampActiveMarker.svg';
import NoStampDefaultMarker from '/src/assets/images/NoStampDefaultMarker.svg';
import { useFilterStore } from '../../../store/filterStore';

declare global {
  interface Window {
    kakao: any;
  }
}

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
  { id: 4, name: '카페 D', lat: 37.5542, lng: 126.9368, hasStamp: true },
  { id: 5, name: '카페 E', lat: 37.5555, lng: 126.938, hasStamp: true },
];

const cafeMockDetail = {
  distanceText: '500m',
  address: '서울 서대문구 이화여대길 52',
  images: [
    "https://cdn.pixabay.com/photo/2017/03/17/10/29/coffee-2151200_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/09/21/05/58/coffee-5589038_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/10/21/16/48/table-4566563_1280.jpg",
  ],
  keywords: ['분위기좋음', '조용한', '디저트맛집'],
};

const getMarkerImage = (hasStamp: boolean, isActive: boolean) => {
  const imagePath = hasStamp
    ? isActive
      ? StampActiveMarker
      : StampDefaultMarker
    : isActive
      ? NoStampActiveMarker
      : NoStampDefaultMarker

  const size = isActive
    ? new window.kakao.maps.Size(40, 52)
    : new window.kakao.maps.Size(24, 24);

  return new window.kakao.maps.MarkerImage(imagePath, size);
};

const MapPage = () => {
  const nav = useNavigate();
  const mapRef = useRef<HTMLDivElement>(null);
  const activeMarkerRef = useRef<any>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const setDetailVar = () => {
    const root = document.documentElement;
    const h = detailRef.current?.getBoundingClientRect().height ?? 0;
    root.style.setProperty('--detail-h', selectedCafe ? `${h}px` : '0px');
  };

  const { selected, shouldApplyOnMap, markAppliedOnMap } = useSelectedLocationStore();
  const { view, setView } = useMapViewStore();

  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);
  const [isMapView, setIsMapView] = useState(true);
  const [searchValue] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string | undefined>(
    undefined,
  );
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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

  useLayoutEffect(() => {
    setDetailVar();
  }, [selectedCafe]);

  useEffect(() => {
    const node = detailRef.current;
    if (!node) {
      document.documentElement.style.setProperty('--detail-h', '0px');
      return;
    }
    const onResize = () => setDetailVar();
    window.addEventListener('resize', onResize);

    const ro = new ResizeObserver(() => setDetailVar());
    ro.observe(node);

    const onEnd = () => setDetailVar();
    node.addEventListener('transitionded', onEnd);

    requestAnimationFrame(setDetailVar);

    return () => {
      window.removeEventListener('resize', onResize);
      ro.disconnect();
      node.removeEventListener('transitionend', onEnd);
    };
  }, [selectedCafe]);

  useEffect(() => {
    const kakaoKey = import.meta.env.VITE_KAKAO_JS_KEY;
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&autoload=false&libraries=services,clusterer`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = mapRef.current;
        if (!container) return;

        const initialCenter = view?.center ?? { lat: 37.5553, lng: 126.9368 };
        const initialZoom   = view?.zoom ?? 3;

        const map = new window.kakao.maps.Map(container, {
          center: new window.kakao.maps.LatLng(initialCenter.lat, initialCenter.lng),
          level: initialZoom,
        });

        window.kakao.maps.event.addListener(map, 'idle', () => {
          const c = map.getCenter();
          const level = map.getLevel();
          setView({ center: { lat: c.getLat(), lng: c.getLng() }, zoom: level });
        });

        map.addListener('click', () => {
          const prevCafe = dummyCafes.find(
            (c) => c.id === activeMarkerRef.current?.__cafeId,
          );
          if (prevCafe) {
            activeMarkerRef.current.setImage(
              getMarkerImage(prevCafe.hasStamp, false),
            );
          }
          activeMarkerRef.current = null;
          setSelectedCafe(null);
          setIsFilterPopupOpen(false);
        });

        dummyCafes.forEach((cafe) => {
          const position = new window.kakao.maps.LatLng(cafe.lat, cafe.lng);
          const marker = new window.kakao.maps.Marker({
            position,
            image: getMarkerImage(cafe.hasStamp, false),
            map,
          });

          marker.addListener('click', () => {
            setTimeout(() => {
              if (activeMarkerRef.current) {
                const prevCafe = dummyCafes.find(
                  (c) => c.id === activeMarkerRef.current.__cafeId,
                );
                if (prevCafe) {
                  activeMarkerRef.current.setImage(
                    getMarkerImage(prevCafe.hasStamp, false),
                  );
                }
              }

              marker.setImage(getMarkerImage(cafe.hasStamp, true));
              activeMarkerRef.current = marker;
              activeMarkerRef.current.__cafeId = cafe.id;
              map.panTo(position); 
              setSelectedCafe(cafe);
            }, 0);
          });
        });

        // 인스턴스 보관
        (mapRef.current as any).__map = map;
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // 리스트에서 위치 설정 후 돌아온 경우 1회만 리센터
  useEffect(() => {
    const map: any = (mapRef.current as any)?.__map;
    if (!map || !selected) return;
    if (shouldApplyOnMap) {
      const { lat, lng } = selected;
      map.setCenter(new window.kakao.maps.LatLng(lat, lng));
      markAppliedOnMap(); // 한 번만 적용
    }
  }, [selected?.updatedAt, shouldApplyOnMap, markAppliedOnMap]);

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="transparent" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Helmet>

      <div className="h-[env(safe-area-inset-top)] bg-transparent" />

      <div className="relative -mx-[1.5rem]">
        <div ref={mapRef} className="w-full h-[100dvh] z-[0]" />
      </div>

      <div className="absolute top-[env(safe-area-inset-top)] left-0 right-0 z-[10] flex justify-center">
        <div className="w-full px-[1.5rem] mt-[1.5rem]">
          <SearchBar
            value={searchValue}
            onChange={() => {}}
            placeholder="취향에 맞는 카페를 찾아보세요!"
          />
          <button
            onClick={() => nav('/search')}
            className="absolute inset-0"
            aria-label="검색 페이지로 이동"
          />
          <div className="mt-[0.5rem]">
            <FilterBar onOpenFilterPopup={handleOpenFilterPopup} />
          </div>
        </div>
      </div>

      <div
        className={`
          fixed
          left-[1.5rem] right-[1.5rem]
          sm:left-[calc((100vw-24.5625rem)/2+1.5rem)]
          sm:right-[calc((100vw-24.5625rem)/2+1.5rem)]
          z-[60] flex items-center
          transition-[bottom] duration-150 ease-in-out
          bottom-[calc(var(--detail-h,_0px)+6.25rem)]
        `}
      >
        <div className="w-full">
          <StampLegend />
        </div>
        <div className="ml-[0.75rem]">
          <MapViewToggleButton
            isMapView={isMapView}
            onClick={() => setIsMapView(p => !p)}
          />
        </div>
      </div>

      {selectedCafe && (
        <div
        ref={detailRef}
          className={`absolute bottom-[4.5625rem] left-0 right-0 flex justify-center transition-transform duration-300 ease-in-out pointer-events-auto z-[999] ${selectedCafe ? 'translate-y-0' : 'translate-y-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <CafeDetailCard
            name={selectedCafe.name}
            distanceText={cafeMockDetail.distanceText}
            address={cafeMockDetail.address}
            images={cafeMockDetail.images}
            keywords={cafeMockDetail.keywords}
          />
        </div>
      )}

      {isPopupVisible && (
        <div className="fixed inset-0 z-[200] flex justify-center" onClick={handleCloseFilterPopup}>
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

      <CommonBottomBar
        active="search"
        onChange={(tab) => {
          console.log('탭 변경:', tab);
        }}
      />
    </>
  );
};

export default MapPage;
