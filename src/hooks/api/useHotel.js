import useAsync from '../useAsync';
import { useToken, useEventInfo } from '../useContext';

import * as hotelApi from '../../services/hotelApi';

export default function getEventHotelsInfo() {
  const token = useToken();
  const { id } = useEventInfo();

  const {
    data: hotel,
    loading: hotelLoading,
    error: hotelError,
    act: getEventHotel,
  } = useAsync(() => hotelApi.getEventHotelsInfo(token, id));

  return {
    hotel,
    hotelLoading,
    hotelError,
    getEventHotel,
  };
}
