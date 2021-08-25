import api from "./api";

export const registerUser = (name, email, cpf, password) => {
  return api()
    .post("/usuario", { name, email, cpf, password })
    .then((response) => {
      return response.data || {};
    })
    .catch((error) => {
      throw error;
    });
};

export const registerCompany = (
  name,
  email,
  cnpj,
  password,
  confirmPassword
) => {
  return api()
    .post("/empresa", { name, email, cnpj, password, confirmPassword })
    .then((response) => {
      return response.data || {};
    })
    .catch((error) => {
      throw error;
    });
};
