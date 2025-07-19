import { useNavigate } from "react-router-dom";
import ListViewIcon from "/src/assets/images/ListView.svg?react";
import MapViewIcon from "/src/assets/images/MapView.svg?react";

interface Props {
  isMapView: boolean;
  onClick: () => void;
}

const MapViewToggleButton = ({ isMapView }: Props) => {
  const Icon = isMapView ? ListViewIcon : MapViewIcon;

  const navigate = useNavigate();

  const handleClick = () => {
    if (isMapView) {
      navigate("/search"); // 리스트 페이지
    } else {
      navigate("/map"); // 지도 페이지
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        width: "4rem", 
        height: "4rem",
        backgroundColor: "transparent",
        padding: 0,
        border: "none",
        zIndex: 10,
      }}
    >
      <Icon className="w-[4rem] h-[4rem] object-contain" />
    </button>
  );
};

export default MapViewToggleButton;
