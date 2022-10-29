import api from './api';

export async function getEventHotelsInfo(token, id) {
  const response = await api.get(`/hotel/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
