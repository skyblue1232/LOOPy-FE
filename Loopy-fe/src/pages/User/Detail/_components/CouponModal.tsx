import { useNavigate } from "react-router-dom";
import BaseModalLayout from "./BaseModal";
import CouponIcon from "/src/assets/images/RedImage.svg?react"; 

interface Props {
    onClose: () => void;
    onConfirm: () => void;
    couponName?: string;
    discountText?: string; 
    expiredAt?: string;   
}

export default function CouponReceivedModal({ 
    onClose,
    couponName,
    discountText,
    expiredAt,
}: Props) {
    const navigate = useNavigate();

    const handleConfirm = () => {
        onClose();
        navigate("/mypage?my.step=couponBox");
    };

    return (
        <BaseModalLayout
            onConfirm={handleConfirm}
            onClose={onClose}
            confirmText="쿠폰함 확인하기"
        >
            <div className="flex items-center">
                <CouponIcon className="w-[3.625rem] h-[3.625rem] mr-[1rem]" />
                <p className="text-[1.25rem] font-bold text-[#252525] leading-[1.5rem]">
                {couponName} <br />
                {discountText} 쿠폰을 받았어요!
                </p>
            </div>
            <p className="mt-[1rem] text-[#7F7F7F] text-[0.875rem] font-normal leading-[1.5rem]">
                해당 쿠폰은 {expiredAt}까지 사용 가능해요
            </p>
        </BaseModalLayout>
    );
}
