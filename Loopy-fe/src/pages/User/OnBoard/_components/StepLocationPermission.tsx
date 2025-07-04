const StepLocationPermission = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="p-6 text-center">
      <div className="text-xl mb-4">📍</div>
      <h2 className="text-lg font-semibold mb-2">위치 정보를 허용하시겠습니까?</h2>
      <p className="text-sm text-[#7F7F7F] mb-6">
        주변에서 내 기기 위치에 액세스하도록 허용하시겠습니까?
      </p>

      <div className="space-y-3">
        <button
          onClick={onNext}
          className="w-full py-3 rounded-md text-white bg-[#00A55D]"
        >
          앱 사용 중에만 허용
        </button>
        <button className="w-full py-3 rounded-md border text-[#252729]">
          이번만 허용
        </button>
        <button className="w-full py-3 rounded-md border text-[#252729]">
          거부
        </button>
      </div>
    </div>
  );
};

export default StepLocationPermission;