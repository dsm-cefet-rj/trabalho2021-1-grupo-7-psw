import api from "./api";

export const getUser = (emailType, passwordType) => {
  console.log(emailType, passwordType);
  return api()
    .get("/login", { params: { email: emailType, password: passwordType } })
    .then((response) => {
      return response.data || {};
    })
    .catch((error) => {
      throw error;
    });
};
