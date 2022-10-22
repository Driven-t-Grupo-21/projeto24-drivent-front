import { useState } from 'react';

import styled from 'styled-components';

import DashboardTitle from '../DashboardTitle';
import TicketSummary from './TicketSummary';
import PaymentConfirmed from './PaymentConfirmed';

export default function PaymentChoice() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <Container>
      <DashboardTitle>Ingresso e pagamento</DashboardTitle>
      <h1>Ingresso escolhido</h1>
      <TicketSummary />
      <h1>Pagamento</h1>
      {!confirmed ? <h2>Cartão</h2> : <PaymentConfirmed />}
    </Container>
  );
}

const Container = styled.div`
  h1 {
    font-size: 20px;
    color: #8e8e8e;
    margin-bottom: 20px;
  }
`;
