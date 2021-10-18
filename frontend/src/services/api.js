import axios from 'axios';

const getAuthorization = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    return {
      'Content-Type': 'application/json',
      'Acess-Control-Allow-Origin': '*',
      Authorization: `Bearer ${user.token}`,
      Accept: 'application/json',
    };
  } else {
    return {
      'Content-Type': 'application/json',
      'Acess-Control-Allow-Origin': '*',
      Accept: 'application/json',
    };
  }
};

const api = () =>
  axios.create({
    baseURL: 'http://localhost:8080/',
    headers: getAuthorization(),
  });

export default api;
