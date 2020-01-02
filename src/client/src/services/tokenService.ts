let accessToken: string | null = null;

export const setAccessToken = (value: string | null) => {
  accessToken = value;
};

export const getAccessToken = () => {
  return accessToken;
};

export const fetchAccessToken = async (): Promise<string | undefined> => {
  const { accessToken } = await fetch('http://localhost:4000/refresh_token', {
    method: 'POST',
    credentials: 'include',
  }).then(response => {
    return response.json();
  });

  return accessToken;
};
