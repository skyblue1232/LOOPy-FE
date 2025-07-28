import { useMutation } from "@tanstack/react-query";
import { signup } from "../../../apis/signin/api";
import type { SignupRequest, SignupResponse } from "../../../apis/signin/type.ts";

export const useSignup = () => {
  return useMutation<SignupResponse, Error, SignupRequest>({
    mutationFn: signup,
    onSuccess: (data) => {
      if (data.resultType === "SUCCESS") {
        console.log("회원가입 성공:", data.success);
      } else {
        console.warn("서버 응답 실패:", data.error);
      }
    },
    onError: (error) => {
      console.error("네트워크 오류 발생:", error);
    },
    onSettled: () => {
      console.log("회원가입 요청 완료 (성공/실패 무관)");
    },
  });
};
