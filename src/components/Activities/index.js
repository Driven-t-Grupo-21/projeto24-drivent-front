import React from 'react';
import getUserOrderByEvent from '../../hooks/api/useUserOrder';
import DashboardLoading from '../DashboardLoading';
import DashboardSubtitle from '../DashboardSubtitle';
import DashboardTitle from '../DashboardTitle';
import DashboardWarning from '../DashboardWarning';
import ActivitiesList from './ActivitiesList';

function ActivityPage() {
  const { userOrder, orderLoading, getUserOrder } = getUserOrderByEvent();

  if (orderLoading) return <DashboardLoading />;

  if (userOrder) {
    if (userOrder.Ticket.type === 'Online') {
      return (
        <DashboardWarning title="Escolha de hotel e quarto">
          Sua modalidade de ingresso não inclui hospedagem <br />
          Prossiga para a escolha de atividades
        </DashboardWarning>
      );
    }
  } else {
    return (
      <DashboardWarning title="Escolha de hotel e quarto">
        Você precisa ter confirmado pagamento antes <br />
        de fazer a escolha de hospedagem
      </DashboardWarning>
    );
  }

  return (
    <>
      <DashboardTitle>Escolha de atividades</DashboardTitle>
      <DashboardSubtitle>Primeiro, filtre pelo dia do evento: </DashboardSubtitle>
      <ActivitiesList />
    </>
  );
}

export default ActivityPage;
