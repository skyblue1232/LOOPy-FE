import LoopyIcon from "../../../../assets/images/LoopyIcon.svg?react";

const LoopyIconSection = () => {
  return (
    <div className="absolute top-0 left-0 right-0 w-full h-[16rem] z-0">
      <svg
        viewBox="0 0 393 160"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L0,126 Q124,116 204,134 Q368,174 396,124 L393,0 Z"
          fill="#5B68DF"
        />
      </svg>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pt-[2rem]">
        <LoopyIcon />
      </div>
    </div>
  );
};

export default LoopyIconSection;
