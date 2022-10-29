import useAsync from '../useAsync';

import * as roomApi from '../../services/hotelApi';

export default function createReserveRoom() {
  const { data: room, loading: roomLoading, error: roomError, act: reserveRoom } = useAsync(roomApi.reserveRoom, false);

  return {
    room,
    roomLoading,
    roomError,
    reserveRoom,
  };
}
