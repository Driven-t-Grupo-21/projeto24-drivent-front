import useAsync from '../useAsync';
import { useToken } from '../useContext';
import * as activitiesApi from '../../services/activitiesApi';

export default function getActivitiesInfos() {
  const token = useToken();
  const {
    data: dates,
    loading: activitiesLoading,
    error: activitiesError,
    act: getDates,
  } = useAsync(() => activitiesApi.getDates(token));

  return {
    dates,
    activitiesLoading,
    activitiesError,
    getDates,
  };
}
