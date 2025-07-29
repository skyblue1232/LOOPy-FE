import axiosInstance from "../axios";
import type { PatchAgreementRequest, PatchAgreementResponse } from "./type";

export const patchAgreements = async (
  data: PatchAgreementRequest
): Promise<PatchAgreementResponse> => {
  const res = await axiosInstance.post<PatchAgreementResponse>(
    "/api/v1/users/me/agreements",
    data
  );
  return res.data;
};