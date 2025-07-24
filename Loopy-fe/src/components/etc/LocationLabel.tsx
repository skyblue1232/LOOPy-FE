import { useNavigate } from "react-router-dom";
import PinIcon from "/src/assets/images/PinIcon.svg?react";

interface LocationLabelProps {
  dongName: string; 
}

const LocationLabel = ({ dongName }: LocationLabelProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname.includes("/map")) {
      navigate("/map/location");
    } else {
      navigate("/search/location");
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="flex items-center text-[0.875rem] text-[#3B3B3B]"
    >
      <PinIcon
        className="w-[1rem] h-[1rem] mr-[0.25rem]"
      />
      <span>{dongName}</span>
    </div>
  );
};

export default LocationLabel;
