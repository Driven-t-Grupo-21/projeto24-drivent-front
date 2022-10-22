import useAsync from '../useAsync';
import { useToken } from '../useContext';

import * as orderApi from '../../services/orderApi';

export default function createEventOrder() {
  const token = useToken();
  const {
    data: order,
    loading: orderLoading,
    error: orderError,
    act: createOrder,
  } = useAsync((data) => {
    orderApi.createOrder(token);
  });

  return {
    order,
    orderLoading,
    orderError,
    createOrder,
  };
}
