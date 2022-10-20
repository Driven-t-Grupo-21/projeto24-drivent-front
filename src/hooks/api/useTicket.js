import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function getEventTickets() {
  const token = useToken();

  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: getEventTicket,
  } = useAsync(() => ticketApi.getEventTicketsInfo(token));

  return {
    ticket,
    ticketLoading,
    ticketError,
    getEventTicket,
  };
}
