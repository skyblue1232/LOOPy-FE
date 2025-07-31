import { encrypt, decrypt } from "./crypto"; 

class Storage {
  static getAccessToken = () => {
    const encrypted = localStorage.getItem("accessToken");
    return encrypted ? decrypt(encrypted) : undefined;
  };

  static setAccessToken = (accessToken: string) => {
    const encrypted = encrypt(accessToken);
    localStorage.setItem("accessToken", encrypted);
  };

  static getNickname = () => {
    const encrypted = localStorage.getItem("nickname");
    return encrypted ? decrypt(encrypted) : undefined;
  };

  static setNickname = (nickname: string) => {
    const encrypted = encrypt(nickname);
    localStorage.setItem("nickname", encrypted);
  };

  static clearStorage = () => {
    localStorage.clear();
  };
}

export default Storage;
