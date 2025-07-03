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
      {checked && <div className="w-[0.625rem] h-[0.625rem] bg-white rounded-full" />}
    </div>
  );
};

export default CheckCircle;
