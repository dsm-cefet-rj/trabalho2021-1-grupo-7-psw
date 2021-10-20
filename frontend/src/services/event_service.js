import api from './api';

export const getSales = (id) => {
  return api()
    .get('/compras/empresas/' + id)
    .then((response) => {
      return response.data || {};
    })
    .catch((error) => {
      throw error;
    });
};

export const getEvents = () => {
  return api()
    .get('/eventos')
    .then((response) => {
      return response.data || {};
    })
    .catch((error) => {
      throw error;
    });
};

export const getEventBySlug = (slug) => {
  return api()
    .get(`/eventos/${slug}`)
    .then((response) => {
      return response.data.event || {};
    })
    .catch((error) => {
      throw error;
    });
};

export const registerEvent = (formData) => {
  return api()
    .post('/eventos', formData)
    .then((response) => {
      return response.data.event || {};
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
) => {
  return api()
    .put(`/eventos/${slug}`, {
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
    .delete(`/eventos/${slug}`)
    .then((response) => {
      return response.data.event || {};
    })
    .catch((error) => {
      throw error;
    });
};

export const buyEvent = ({ eventId }) => {
  console.log(eventId, 'compra');
  return api()
    .post(`/compras`, { eventId })
    .then((response) => {
      return response.data || {};
    })
    .catch((error) => {
      throw error;
    });
};

export const getEventsBoughtByUser = ({ userId }) => {
  return api()
    .get(`/compras/usuarios/${userId}`)
    .then((response) => {
      return response.data || {};
    })
    .catch((error) => {
      throw error;
    });
};

export const getEventsByCompany = ({ userId }) => {
  return api()
    .get(`/empresas/${userId}/eventos`)
    .then((response) => {
      return response.data || {};
    })
    .catch((error) => {
      throw error;
    });
};
