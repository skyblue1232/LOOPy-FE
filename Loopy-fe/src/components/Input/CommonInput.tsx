interface CommonInputProps {
  placeholder: string;
}

const CommonInput = ({ placeholder }: CommonInputProps) => {
  return (
    <div className="w-full p-[0.25rem]">
      <input
        placeholder={placeholder}
        className="w-full p-[1rem] text-[0.875rem] font-suit font-normal text-[#323232] placeholder:text-[#7F7F7F] placeholder:font-suit placeholder:font-normal border-[#7f7f7f] border-[0.5px] rounded-[9px]"
      />
    </div>
  );
};

export default CommonInput;