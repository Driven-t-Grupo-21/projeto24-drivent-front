import api from './api';

export async function createOrder(body, token) {
  const response = await api.post('/order', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
