import api from './api';

export async function getEventHotelsInfo(token, id) {
  const response = await api.get(`/hotel/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function reserveRoom(token, eventId, roomId) {
  const body = {
    roomId,
  };
  const response = await api.post(`/hotel/${eventId}/reservation`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
