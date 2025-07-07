import { useEffect, useRef, useState } from "react";
import MapViewToggleButton from "../../../components/button/MapViewToggleButton";
import StampLegend from "../../../components/modal/StampLegend";
import CafeDetailCard from "../../../components/card/MapCafeDetailCard";
import SearchBar from "../../../components/Input/SearchBar";
import FilterBar from "./_components/filter/FilterBar";
import FilterPopup from "./_components/filter/FilterPopup";

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
  { id: 1, name: "카페 A", lat: 37.5563, lng: 126.9355, hasStamp: false },
  { id: 2, name: "카페 B", lat: 37.5558, lng: 126.937, hasStamp: true },
  { id: 3, name: "카페 C", lat: 37.5545, lng: 126.9362, hasStamp: false },
];

const cafeMockDetail = {
  distanceText: "500m", // API 연동 전 mock 값
  address: "서울 서대문구 이화여대길 52",
  images: ["/sample1.jpg", "/sample2.jpg", "/sample3.jpg"],
  keywords: ["분위기좋음", "조용한", "디저트맛집"],
};

const getMarkerImage = (hasStamp: boolean, isActive: boolean) => {
  const imagePath = hasStamp
    ? isActive
      ? "/src/assets/images/StampActiveMarker.svg"
      : "/src/assets/images/StampDefaultMarker.svg"
    : isActive
      ? "/src/assets/images/NoStampActiveMarker.svg"
      : "/src/assets/images/NoStampDefaultMarker.svg";

  const size = isActive
    ? new window.kakao.maps.Size(48, 54)
    : new window.kakao.maps.Size(36, 40);

  return new window.kakao.maps.MarkerImage(imagePath, size);
};

const MapPage = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const activeMarkerRef = useRef<any>(null);
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);
  const [isMapView, setIsMapView] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<string | undefined>(undefined);
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);

  const handleOpenFilterPopup = (group?: string) => {
    setSelectedGroup(group);
    setIsFilterPopupOpen(true);
  };

  useEffect(() => {
    const kakaoKey = import.meta.env.VITE_KAKAO_JS_KEY;

    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&autoload=false&libraries=services,clusterer`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = mapRef.current;
        if (!container) return;

        const map = new window.kakao.maps.Map(container, {
          center: new window.kakao.maps.LatLng(37.5553, 126.9368),
          level: 3,
        });

        map.addListener("click", () => {
          const prevCafe = dummyCafes.find((c) => c.id === activeMarkerRef.current?.__cafeId);
          if (prevCafe) {
            activeMarkerRef.current.setImage(getMarkerImage(prevCafe.hasStamp, false));
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

          marker.addListener("click", () => {
            setTimeout(() => {
              if (activeMarkerRef.current) {
                const prevCafe = dummyCafes.find((c) => c.id === activeMarkerRef.current.__cafeId);
                if (prevCafe) {
                  activeMarkerRef.current.setImage(getMarkerImage(prevCafe.hasStamp, false));
                }
              }

              marker.setImage(getMarkerImage(cafe.hasStamp, true));
              activeMarkerRef.current = marker;
              activeMarkerRef.current.__cafeId = cafe.id;
              setSelectedCafe(cafe);
            }, 0);
          });
        });
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="relative h-[100vh]">

      {/* 지도 영역 */}
      <div ref={mapRef} className="w-full h-full" />

      {/* 오버레이 (검색창, 필터바, 안내박스 등) */}
      <div className="absolute bottom-0 left-0 right-0 h-[100%] pointer-events-none z-[10]">

        {/* 검색창 */}
        <div className="pointer-events-auto">
          <SearchBar
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="취향에 맞는 카페를 찾아보세요!"
          />
        </div>

        {/* 필터바 */}
        <div className="pointer-events-auto">
          <FilterBar onOpenFilterPopup={handleOpenFilterPopup} />
        </div>

        {/* 필터 팝업 */}
        {isFilterPopupOpen && (
          <div className="absolute bottom-0 left-0 right-0 z-[50] pointer-events-auto">
            <FilterPopup selectedGroup={selectedGroup} onClose={() => setIsFilterPopupOpen(false)} />
          </div>
        )}

        {/* 안내박스 + 뷰 전환 버튼 */}
        <div
          className={`
            absolute
            left-[1.25rem] right-[1.25rem]
            flex justify-between items-center
            h-[3.5rem]
            pointer-events-auto
            transition-all
            ${selectedCafe ? "bottom-[17.75rem]" : "bottom-[1.25rem]"}
          `}
        >
          <StampLegend />
          <MapViewToggleButton
            isMapView={isMapView}
            onClick={() => setIsMapView((prev) => !prev)}
          />
        </div>

        {/* 카페 상세 카드 */}
        {selectedCafe && (
          <div
            className={`
              absolute bottom-0 left-0 right-0
              flex justify-center
              transition-transform duration-300 ease-in-out
              pointer-events-auto z-[20]
              ${selectedCafe ? "translate-y-0" : "translate-y-full"}
            `}
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
      </div>
    </div>
  );
};

export default MapPage;
