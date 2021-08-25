import api from "./api";

export const getEvents = () => {
  return api()
    .get("/eventos",)
    .then((response) => {
      return response.data || {};
    })
    .catch((error) => {
      throw error;
    });
};


export const getEventBySlug = (slug) => {
  return api()
    .get(`/evento/${slug}`,)
    .then((response) => {
      return response.data.event || {};
    })
    .catch((error) => {
      throw error;
    });
};
