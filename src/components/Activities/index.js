import React from 'react';
import DashboardSubtitle from '../DashboardSubtitle';
import DashboardTitle from '../DashboardTitle';
import ActivitiesList from './ActivitiesList';

function ActivityPage({ setProgress }) {
  //   if (hotelLoading) return <DashboardLoading />;

  //   if (hotelError)
  //     return (
  //       <DashboardWarning title="Escolha de hotel e quarto">
  //         {hotelError === 'Order not completed' ? (
  //           <>
  //             Você precisa ter confirmado pagamento antes <br />
  //             de fazer a escolha de hospedagem
  //           </>
  //         ) : (
  //           <>
  //             Sua modalidade de ingresso não inclui hospedagem <br />
  //             Prossiga para a escolha de atividades
  //           </>
  //         )}
  //       </DashboardWarning>
  //     );

  //   if (hotel.hotelsAvailable.length === 0) return <DashboardWarning>This event has no hotels</DashboardWarning>;

  return (
    <>
      <DashboardTitle>Escolha de atividades</DashboardTitle>
      <DashboardSubtitle>Primeiro, filtre pelo dia do evento: </DashboardSubtitle>
      <ActivitiesList />
    </>
  );
}

export default ActivityPage;
