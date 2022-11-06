import React, { useContext, useEffect } from 'react';
import ReservationSummaryContext from '../../contexts/ReservationSummaryContext';
import RoomContext from '../../contexts/RoomContext';

import getEventHotelsInfo from '../../hooks/api/useHotel';
import DashboardLoading from '../DashboardLoading';
import DashboardSubtitle from '../DashboardSubtitle';
import DashboardTitle from '../DashboardTitle';
import DashboardWarning from '../DashboardWarning';
import HotelsList from './HotelsList';

function HotelPage({ setProgress, isChangeRoom, setIsChangeRoom }) {
  const { setHotelData } = useContext(RoomContext);
  const { setSummary } = useContext(ReservationSummaryContext);
  const { hotel, hotelLoading, hotelError } = getEventHotelsInfo();

  useEffect(() => {
    setHotelData('');
  }, []);

  if (hotelLoading) return <DashboardLoading />;

  if (hotelError)
    return (
      <DashboardWarning title="Escolha de hotel e quarto">
        {hotelError === 'Order not completed' ? (
          <>
            Você precisa ter confirmado pagamento antes <br />
            de fazer a escolha de hospedagem
          </>
        ) : (
          <>
            Sua modalidade de ingresso não inclui hospedagem <br />
            Prossiga para a escolha de atividades
          </>
        )}
      </DashboardWarning>
    );

  if (hotel.hotelsAvailable.length === 0) return <DashboardWarning>This event has no hotels</DashboardWarning>;

  if (hotel.isAlreadyBooked !== false && !isChangeRoom) {
    const choosenHotel = hotel.isAlreadyBooked.hotel;
    setSummary({
      hotel: choosenHotel.name,
      hotelPicture: choosenHotel.logoImageUrl,
      roomNumber: hotel.isAlreadyBooked.Rooms.number,
      roomType: hotel.isAlreadyBooked.Rooms.beds,
    });
    setProgress(2);
  }

  return (
    <>
      <DashboardTitle>Escolha de hotel e quarto</DashboardTitle>
      <DashboardSubtitle>Primeiro escolha seu hotel</DashboardSubtitle>
      <HotelsList hotels={hotel} setProgress={setProgress} setIsChangeRoom={setIsChangeRoom} />
    </>
  );
}

export default HotelPage;
