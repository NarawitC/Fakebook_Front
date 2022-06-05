const ACCESS_TOKEN = 'accessToken';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const setAccessToken = (token) => {
  return localStorage.setItem(ACCESS_TOKEN, token);
};
export const removeToken = () => {
  return localStorage.removeItem(ACCESS_TOKEN);
};
