import { createContext, useState } from 'react';

const TicketSummaryContext = createContext();

export default TicketSummaryContext;

export function TicketSummaryProvider({ children }) {
  const [summary, setSummary] = useState({});

  return <TicketSummaryContext.Provider value={{ summary, setSummary }}>{children}</TicketSummaryContext.Provider>;
}
