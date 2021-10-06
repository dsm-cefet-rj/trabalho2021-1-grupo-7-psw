import api from './api';

export const getUser = (username, password) => {
  return api()
    .post('/usuarios/login', { username, password })
    .then((response) => {
      return response.data || {};
    })
    .catch((error) => {
      throw error;
    });
};
