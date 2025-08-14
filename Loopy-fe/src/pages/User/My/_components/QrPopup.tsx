import CommonBottomPopup from "../../../../components/popup/CommonBottomPopup";
import CommonButton from "../../../../components/button/CommonButton";
import type { HandlerKey } from "./ProfileSection";

interface QrPopupProps {
  show: boolean;
  onClose: () => void;
  qrImage?: string;
  onScan: (type: HandlerKey, data: any) => void;
}

const QrPopup = ({ show, onClose, qrImage, onScan }: QrPopupProps) => {
  return (
    <CommonBottomPopup
      show={show}
      onClose={onClose}
      titleText="통합 멤버십 QR"
      contentsText="통합 멤버쉽 QR 코드를 통해 쿠폰 사용 · 포인트 사용 · 챌린지 인증이 가능합니다. 직원에게 QR를 보여주세요."
    >
      <div className="flex flex-col items-center my-[1.5rem] gap-3">
        {qrImage ? (
          <img src={qrImage} alt="QR Code" className="w-[10rem] h-[10rem]" />
        ) : (
          <div className="w-[8rem] h-[8rem] bg-gray-200 rounded-md" />
        )}

        <CommonButton
          text="QR 스캔 테스트 (쿠폰)"
          autoStyle
          className="bg-[#6970F3] text-white font-semibold h-[3.125rem] flex items-center justify-center rounded"
          onClick={() =>
            onScan("coupon", {
              userCouponId: 12,
              couponName: "아메리카노 200원 할인",
            })
          }
        />
      </div>
    </CommonBottomPopup>
  );
};

export default QrPopup;
