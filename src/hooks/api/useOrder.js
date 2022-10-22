import useAsync from '../useAsync';
import { useToken } from '../useContext';

import * as orderApi from '../../services/orderApi';

export default function createEventOrder() {
  const {
    data: order,
    loading: orderLoading,
    error: orderError,
    act: createOrder,
  } = useAsync(orderApi.createOrder, false);

  return {
    order,
    orderLoading,
    orderError,
    createOrder,
  };
}
