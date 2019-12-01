let accessToken: string | null = null;

export const setAccessToken = (value: string | null) => {
  accessToken = value;
};

export const getAccessToken = () => {
  return accessToken;
};
