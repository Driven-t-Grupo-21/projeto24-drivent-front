import React, { useContext } from 'react';
import styled from 'styled-components';

import DashboardTitle from './DashboardTitle';
import TicketCards from './TicketCards';
import EventInfoContext from '../contexts/EventInfoContext';

const TicketChoise = () => {
  const { eventInfo } = useContext(EventInfoContext);

  console.log(eventInfo);

  return (
    <Container>
      <DashboardTitle>Ingresso e pagamento</DashboardTitle>
      <h6>Primeiro, escolha sua modalidade de ingresso</h6>
      <section className="cardsSection">
        {eventInfo.Ticket.map((ticket, index) => (
          <>
            <TicketCards isActive={false} key={index}>
              <p>{ticket.type}</p>
              <p className="price">R$ {ticket.price}</p>
            </TicketCards>
          </>
        ))}
      </section>
    </Container>
  );
};

export default TicketChoise;

const Container = styled.div`
  .cardsSection {
    display: flex;
    gap: 25px;
  }

  h6 {
    opacity: 0.5;
    font-size: 20px;
  }
`;
