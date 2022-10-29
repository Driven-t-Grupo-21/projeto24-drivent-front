import { createContext, useState } from 'react';

const ReservationSummaryContext = createContext();

export default ReservationSummaryContext;

export function ReservationSummaryProvider({ children }) {
  const [summary, setSummary] = useState({});

  return (
    <ReservationSummaryContext.Provider value={{ summary, setSummary }}>{children}</ReservationSummaryContext.Provider>
  );
}
