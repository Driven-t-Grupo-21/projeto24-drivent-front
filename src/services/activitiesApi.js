import api from './api';

export async function getDates(token) {
  const response = await api.get('/activities/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getActivities(token, date) {
  const response = await api.get(`/activities/${date}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function bookActivitiesPost(token, id) {
  const response = await api.post(
    `/activities/book/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}