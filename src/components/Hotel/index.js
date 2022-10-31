import React from 'react';

import getEventHotelsInfo from '../../hooks/api/useHotel';
import DashboardLoading from '../DashboardLoading';
import DashboardSubtitle from '../DashboardSubtitle';
import DashboardTitle from '../DashboardTitle';
import DashboardWarning from '../DashboardWarning';
import HotelsList from './HotelsList';

function HotelPage({ setProgress }) {
  const { hotel, hotelLoading, hotelError } = getEventHotelsInfo();

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

  console.log(hotel);

  return (
    <>
      <DashboardTitle>Escolha de hotel e quarto</DashboardTitle>
      <DashboardSubtitle>Primeiro escolha seu hotel</DashboardSubtitle>
      <HotelsList hotels={hotel} setProgress={setProgress} />
    </>
  );
}

export default HotelPage;
