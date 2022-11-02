import useAsync from '../useAsync';
import { useToken } from '../useContext';
import * as activitiesApi from '../../services/activitiesApi';

export default function getActivitiesByDate() {
  const {
    data: activities,
    loading: activitiesDateLoading,
    error: activitiesDateError,
    act: getActivities,
  } = useAsync(activitiesApi.getActivities, false);

  return {
    activities,
    activitiesDateLoading,
    activitiesDateError,
    getActivities,
  };
}
