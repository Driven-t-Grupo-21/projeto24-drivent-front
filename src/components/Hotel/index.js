import React from 'react';

import getEventHotelsInfo from '../../hooks/api/useHotel';
import DashboardLoading from '../DashboardLoading';
import DashboardSubtitle from '../DashboardSubtitle';
import DashboardTitle from '../DashboardTitle';
import DashboardWarning from '../DashboardWarning';

function HotelPage() {
  const { hotel, hotelLoading, hotelError } = getEventHotelsInfo();

  if (hotelLoading) return <DashboardLoading />;

  /* alterar a msg de erro para imprimir conforme figma, e apagar o comentário */
  if (hotelError) return <DashboardWarning title="Escolha de hotel e quarto">{hotelError}</DashboardWarning>;

  console.log(hotel, hotelLoading, hotelError);
  return (
    <>
      <DashboardTitle>Escolha de hotel e quarto</DashboardTitle>
      <DashboardSubtitle>Primeiro escolha seu hotel</DashboardSubtitle>
    </>
  );
}

export default HotelPage;
