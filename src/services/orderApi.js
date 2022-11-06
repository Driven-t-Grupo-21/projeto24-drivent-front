import api from './api';

export async function createOrder(body, token) {
  const response = await api.post('/order', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getUserOrder(token, eventId) {
  const response = await api.get(`/order/${eventId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
