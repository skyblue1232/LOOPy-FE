import type { ApiResponse } from "../types/ApiResponse";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginSuccessResponse {
  message: string;
  token: string;
  user: {
    id: string;
    email: string;
    nickname: string;
  };
}

export type LoginResponse = ApiResponse<LoginSuccessResponse>;
