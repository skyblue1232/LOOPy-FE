export default function StampStatsSkeleton() {
  return (
    <div className="flex w-full animate-pulse">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className={`flex-1 h-[4rem] px-[2rem] ${
            i < 3 ? 'border-r border-[#DFDFDF]' : ''
          } flex flex-col justify-center items-center`}
        >
          <div className="h-[1rem] w-[6rem] bg-[#E0E0E0] rounded mb-[0.5rem]" />
          <div className="h-[1.5rem] w-[4rem] bg-[#E0E0E0] rounded" />
        </div>
      ))}
    </div>
  );
}
