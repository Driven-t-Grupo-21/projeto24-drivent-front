import useAsync from '../useAsync';
import { useToken, useEventInfo } from '../useContext';

import * as ticketApi from '../../services/ticketApi';

export default function getEventTickets() {
  const token = useToken();
  const { id } = useEventInfo();

  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: getEventTicket,
  } = useAsync(() => ticketApi.getEventTicketsInfo(token, id));

  return {
    ticket,
    ticketLoading,
    ticketError,
    getEventTicket,
  };
}
