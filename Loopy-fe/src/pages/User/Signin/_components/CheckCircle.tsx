import CheckIcon from "../../../../assets/images/Check.svg?react";

interface CheckCircleProps {
  checked: boolean;
}

const CheckCircle = ({ checked }: CheckCircleProps) => {
  return (
    <div
      className={`w-[1.25rem] h-[1.25rem] rounded-full border-[1.5px] flex items-center justify-center ${
        checked ? "bg-[#6970F3] border-none" : "border-[#A8A8A8]"
      }`}
    >
      <CheckIcon
        className={`w-3 h-2 ${
          checked ? "text-white" : "text-[#A8A8A8]"
        }`}
      />
    </div>
  );
};

export default CheckCircle;
