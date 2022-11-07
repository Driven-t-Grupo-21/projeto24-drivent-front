import React from 'react';
import getUserOrderByEvent from '../../hooks/api/useUserOrder';
import getActivitiesInfos from '../../hooks/api/useActivities';
import DashboardLoading from '../DashboardLoading';
import DashboardSubtitle from '../DashboardSubtitle';
import DashboardTitle from '../DashboardTitle';
import DashboardWarning from '../DashboardWarning';
import ActivitiesList from './ActivitiesList';

function ActivityPage() {
  const { dates, activitiesLoading, activitiesError, getDates } = getActivitiesInfos();

  if (activitiesLoading) return <DashboardLoading />;

  if (activitiesError) {
    return (
      <DashboardWarning title="Escolha de atividades">
        Você precisa ter confirmado pagamento antes <br />
        de fazer a escolha de atividades
      </DashboardWarning>
    );
  }

  return (
    <>
      <DashboardTitle>Escolha de atividades</DashboardTitle>
      <DashboardSubtitle>Primeiro, filtre pelo dia do evento: </DashboardSubtitle>
      <ActivitiesList dates={dates} getDates={getDates} />
    </>
  );
}

export default ActivityPage;
