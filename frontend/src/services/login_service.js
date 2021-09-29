import api from './api';

export const getUser = (email, password) => {
  return api()
    .post('/usuarios/login', { email, password })
    .then((response) => {
      return response.data.user || {};
    })
    .catch((error) => {
      throw error;
    });
};
