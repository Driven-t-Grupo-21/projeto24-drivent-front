import useAsync from '../useAsync';
import { useToken, useEventInfo } from '../useContext';

import * as orderApi from '../../services/orderApi';

export default function getUserOrderByEvent() {
  const token = useToken();
  const { id } = useEventInfo();

  const {
    data: userOrder,
    loading: orderLoading,
    error: orderError,
    act: getUserOrder,
  } = useAsync(() => orderApi.getUserOrder(token, id));

  return {
    userOrder,
    orderLoading,
    orderError,
    getUserOrder,
  };
}
