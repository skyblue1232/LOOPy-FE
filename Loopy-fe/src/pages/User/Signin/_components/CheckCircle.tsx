import CheckIcon from "../../../../assets/images/Check.svg?react";

interface CheckCircleProps {
  checked: boolean;
}

const CheckCircle = ({ checked }: CheckCircleProps) => {
  return (
    <div
      className={`w-[1.25rem] h-[1.25rem] rounded-full border flex items-center justify-center ${
        checked ? "bg-[#FA9820] border-none" : "border-[#000000]"
      }`}
    >
      <CheckIcon
        className={`w-[0.625rem] h-[0.625rem] ${
          checked ? "text-white" : "text-black"
        }`}
      />
    </div>
  );
};

export default CheckCircle;
