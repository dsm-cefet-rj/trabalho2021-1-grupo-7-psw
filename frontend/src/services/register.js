import api from './api';

export const registerUser = (name, email, document, password) => {
  return api()
    .post('/usuarios', { name, email, document, password })
    .then((response) => {
      return response.data || {};
    })
    .catch((error) => {
      throw error;
    });
};
