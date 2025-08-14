import BaseModalLayout from "./BaseModal";

interface ReviewRestrictionModalProps {
  onClose: () => void;
}

export default function ReviewRestrictionModal({ onClose }: ReviewRestrictionModalProps) {
  return (
    <BaseModalLayout
      onConfirm={onClose}
      onClose={onClose}
      confirmText="확인"
    >
      <p className="text-[1rem] font-medium text-center">
        리뷰 작성은 스탬프 적립 후 가능합니다.
      </p>
    </BaseModalLayout>
  );
}
