import { useState } from 'react';
import HotelPage from '../../../components/Hotel';
import ReservationSummary from '../../../components/Hotel/ReservationSummary';

export default function Hotel() {
  const [progress, setProgress] = useState(1);
  const [isChangeRoom, setIsChangeRoom] = useState(false);

  switch (progress) {
  case 1:
    return <HotelPage setProgress={setProgress} isChangeRoom={isChangeRoom} setIsChangeRoom={setIsChangeRoom}/>;
  case 2:
    return <ReservationSummary setProgress={setProgress} setIsChangeRoom={setIsChangeRoom}/>;
  default:
    return <>default</>;
  }
}
