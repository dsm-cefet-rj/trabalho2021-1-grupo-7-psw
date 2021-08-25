import api from "./api";

export const getEvents = () => {
  return api()
    .get("/eventos")
    .then((response) => {
      return response.data || {};
    })
    .catch((error) => {
      throw error;
    });
};

export const getEventBySlug = (slug) => {
  return api()
    .get(`/evento/${slug}`)
    .then((response) => {
      return response.data.event || {};
    })
    .catch((error) => {
      throw error;
    });
};

export const registerEvent = (
  name,
  type,
  enterprise,
  quantity,
  date,
  price,
  description
) => {
  return api()
    .post("/evento", {
      name,
      type,
      enterprise,
      num_tickets: quantity,
      date,
      price,
      description,
    })
    .then((response) => {
      return response.data || {};
    })
    .catch((error) => {
      throw error;
    });
};

export const updateEvent = (
  slug,
  name,
  type,
  quantity,
  date,
  price,
  description
) => { console.log(slug)
  return api()
    .patch(`/evento/${slug}`, {
      slug,
      name,
      type,
      num_tickets: quantity,
      date,
      price,
      description,
    })
    .then((response) => {
      return response.data || {};
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteEvent = (slug) => {
  return api()
    .delete(`/evento/${slug}`)
    .then((response) => {
      return response.data.event || {};
    })
    .catch((error) => {
      throw error;
    });
};