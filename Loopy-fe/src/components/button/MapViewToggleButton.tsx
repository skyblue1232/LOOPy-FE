interface Props {
  isMapView: boolean;
  onClick: () => void;
}

const MapViewToggleButton = ({ isMapView, onClick }: Props) => {
  const iconSrc = isMapView
    ? "src/assets/images/ListView.svg"
    : "src/assets/images/MapView.svg";

  return (
    <button
      onClick={onClick}
      style={{
        width: "3.75rem", // 60px
        height: "3.75rem",
        borderRadius: "1.875rem",
        backgroundColor: "transparent",
        padding: 0,
        border: "none",
        zIndex: 10,
      }}
    >
      <img
        src={iconSrc}
        alt="전환 버튼"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </button>
  );
};

export default MapViewToggleButton;
