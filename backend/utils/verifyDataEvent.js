const verifyEventData = (
  name,
  type,
  enterprise,
  num_tickets,
  date,
  price,
  description
) => {
  if (!name || name === '') {
    return false;
  }

  if (!type || type === '') {
    return false;
  }

  if (!enterprise || enterprise === '') {
    return false;
  }

  if (!num_tickets || num_tickets === '') {
    return false;
  }

  if (!date || date === '') {
    return false;
  }

  if (!price || price === '') {
    return false;
  }

  if (!description || description === '') {
    return false;
  }

  return true;
};

module.exports = { verifyEventData };
