import api from './api';

export async function getEventTicketsInfo(token, id) {
  const response = await api.get(`/ticket/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
