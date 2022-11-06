import { createContext, useState } from 'react';

const TicketSummaryContext = createContext();

export default TicketSummaryContext;

export function TicketSummaryProvider({ children }) {
  const [summary, setSummary] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  return <TicketSummaryContext.Provider value={{ summary, setSummary, confirmed, setConfirmed }}>{children}</TicketSummaryContext.Provider>;
}
