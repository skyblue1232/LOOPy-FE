import { encrypt, decrypt } from "./crypto.ts";

class Storage {
  static getAccessToken = () => {
    const accessToken = localStorage.getItem("accessToken");
    return accessToken ? decrypt(accessToken) : undefined;
  };

  static setAccessToken = (accessToken: string) => {
    localStorage.setItem("accessToken", encrypt(accessToken));
  };

  static clearStorage = () => {
    localStorage.clear();
  };

  // refreshToken 기능: 아래 메서드는 현재 사용하지 않음
  /*
  static getRefreshToken = () => {
    const refreshToken = localStorage.getItem("refreshToken");
    return refreshToken ? decrypt(refreshToken) : undefined;
  };

  static setRefreshToken = (refreshToken: string) => {
    localStorage.setItem("refreshToken", encrypt(refreshToken));
  };

  static getTokens = () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    return {
      accessToken: accessToken ? decrypt(accessToken) : undefined,
      refreshToken: refreshToken ? decrypt(refreshToken) : undefined,
    };
  };

  static setTokens = ({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) => {
    localStorage.setItem("accessToken", encrypt(accessToken));
    localStorage.setItem("refreshToken", encrypt(refreshToken));
  };
  */
}

export default Storage;
