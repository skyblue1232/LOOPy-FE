import { useMutation } from "@tanstack/react-query";
import { signup } from "../../../apis/signin/api";
import type { SignupRequest, SignupResponse } from "../../../apis/signin/type.ts";

export const useSignup = () => {
  return useMutation<SignupResponse, Error, SignupRequest>({
    mutationFn: signup,
  });
};
