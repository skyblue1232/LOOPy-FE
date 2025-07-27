import type { ApiResponse } from "../types/ApiResponse";

export interface LoginRequest {
  email: string;
  password: string;
  role: "CUSTOMER" | "OWNER";
}

export interface LoginSuccessResponse {
  message: string;
  token: string;
  user: {
    id: string;
    email: string;
    nickname: string;
    roles: ("CUSTOMER" | "OWNER")[]; 
    currentRole: "CUSTOMER" | "OWNER";
  };
}

export type LoginResponse = ApiResponse<LoginSuccessResponse>;
