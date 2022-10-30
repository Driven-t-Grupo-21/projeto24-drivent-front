import { useState } from 'react';
import HotelPage from '../../../components/Hotel';
import ReservationSummary from '../../../components/Hotel/ReservationSummary';

export default function Hotel() {
  const [progress, setProgress] = useState(1);
  switch (progress) {
  case 1:
    return <HotelPage setProgress={setProgress} />;
  case 2:
    return <ReservationSummary setProgress={setProgress} />;
  default:
    return <>default</>;
  }
}
