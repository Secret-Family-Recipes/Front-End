export const setJWT = token => {
  localStorage.setItem('token', `bearer ${token}`);
};
