import QRScanner from '../../QRScanner';

type QRScannerSectionProps = {
  scanCompleted: boolean;
  onRescan: () => void;
  onDetect: (decoded: string) => void;
  error: string | null;
};

export default function QRScannerSection({
  scanCompleted,
  onRescan,
  onDetect,
  error,
}: QRScannerSectionProps) {
  return (
    <div className="flex-1 flex flex-col items-center overflow-hidden">
      <div className="w-[29rem] h-[32rem] relative bg-white rounded-lg flex items-center justify-center">
        {scanCompleted ? (
          <>
            <div className="absolute top-2 right-2 overflow-hidden">
              <button
                onClick={onRescan}
                className="text-[1rem] text-black underline p-4"
              >
                스캔 다시하기
              </button>
            </div>
            <div className="text-center text-[1rem] font-semibold text-[#7F7F7F] px-4">
              고객의 멤버쉽 QR 스캔이 완료되었어요!
            </div>
          </>
        ) : (
          <QRScanner onDetect={onDetect} onError={() => {}} />
        )}
      </div>

      {error && <div className="text-sm text-red-500 my-2">{error}</div>}
    </div>
  );
}
