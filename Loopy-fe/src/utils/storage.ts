class Storage {
  static getAccessToken = () => {
    return localStorage.getItem("accessToken") ?? undefined;
  };

  static setAccessToken = (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken);
  };

  static clearStorage = () => {
    localStorage.clear();
  };
}

export default Storage;
