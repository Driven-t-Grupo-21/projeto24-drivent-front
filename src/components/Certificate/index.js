import React from 'react';
// import DashboardLoading from '../DashboardLoading';
import DashboardSubtitle from '../DashboardSubtitle';
import DashboardTitle from '../DashboardTitle';
import CertificateList from './CertificateList';
// import DashboardWarning from '../DashboardWarning';

function CertificatePage() {
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
      <DashboardTitle>Pegue seu certificado</DashboardTitle>
      <DashboardSubtitle>O certificado ficará disponível após o término do evento</DashboardSubtitle>
      <CertificateList />
    </>
  );
}

export default CertificatePage;
