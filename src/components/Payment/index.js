import { useState, useContext } from 'react';

import styled from 'styled-components';

import DashboardTitle from '../DashboardTitle';
import TicketSummary from './TicketSummary';
import PaymentConfirmed from './PaymentConfirmed';
import CreditCard from './CreditCard';
import TicketSummaryContext from '../../contexts/TicketSummaryContext';

export default function PaymentChoice() {
  const { summary, confirmed, setConfirmed } = useContext(TicketSummaryContext);

  return (
    <Container>
      <DashboardTitle>Ingresso e pagamento</DashboardTitle>
      <h1>Ingresso escolhido</h1>
      <TicketSummary />
      <h1>Pagamento</h1>
      {confirmed ? <CreditCard /> : <PaymentConfirmed />}
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
