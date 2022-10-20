import api from './api';

export async function getEventTicketsInfo(token) {
  const response = await api.get('/ticket', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
