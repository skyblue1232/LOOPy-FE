import { useNavigate } from "react-router-dom";
import { useUseMyCoupon } from "../../../../hooks/mutation/my/coupon/useMyCoupon";
import { useCompleteChallenge, useVerifyChallenge } from "../../../../hooks/mutation/my/challenge/useChallengeMutation";
import { usePointTransactionsQuery } from "../../../../hooks/query/my/useMyPoint";
import { handleCouponScan } from "./handleCouponScan";

export const useChallengeHandlers = (setPopupState: Function) => {
  const navigate = useNavigate();
  const { mutate: useCoupon } = useUseMyCoupon();
  const { mutate: verifyChallenge } = useVerifyChallenge();
  const { mutate: completeChallenge } = useCompleteChallenge();
  const { refetch: refetchPointTransactions } = usePointTransactionsQuery();

  return {
    coupon: async (data: any) => {
      handleCouponScan(useCoupon, data.userCouponId, data.couponName, (msg) =>
        setPopupState({
          show: true,
          titleText: msg,
          purpleButton: "쿠폰함 보러가기",
          purpleButtonOnClick: () =>
            navigate("/mypage", { state: { step: "couponBox" } }),
        })
      );
    },
    point: async () => {
      const { data: res } = await refetchPointTransactions();
      setPopupState({
        show: true,
        titleText: "포인트 사용 완료",
        contentsText: res?.success?.[0] ?? "포인트 사용 처리 완료",
      });
    },
    challengeVerify: async (data: any) => {
      verifyChallenge(
        { userId: data.userId, challengeId: data.challengeId },
        {
          onSuccess: (res) => {
            setPopupState({
              show: true,
              titleText: res.message,
              contentsText: `지금까지 ${res.data?.completedCount ?? 0}/3회 인증했어요.\n3회 모두 달성 시 혜택을 받을 수 있어요!`,
            });
          },
          onError: (err) => {
            setPopupState({
              show: true,
              titleText: err.message ?? "챌린지 인증 실패",
            });
          },
        }
      );
    },
    challengeComplete: async (data: any) => {
      completeChallenge(data.challengeId, {
        onSuccess: (res) => {
          if (res.success?.couponId) {
            setPopupState({
              show: true,
              titleText: res.success?.message ?? "쿠폰이 지급되었습니다.",
              purpleButton: "쿠폰함 보러가기",
              purpleButtonOnClick: () =>
                navigate("/mypage", { state: { step: "couponBox" } }),
            });
          } else {
            setPopupState({
              show: true,
              titleText:
                res.success?.message ??
                "챌린지 완료! 3회 인증을 완료해 혜택이 지급되었습니다.",
            });
          }
        },
        onError: (err) => {
          setPopupState({
            show: true,
            titleText: err.message ?? "챌린지 완료 실패",
          });
        },
      });
    },
  };
};
