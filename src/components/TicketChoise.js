import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import DashboardTitle from './DashboardTitle';
import TicketCards from './TicketCards';
import EventInfoContext from '../contexts/EventInfoContext';
import getEventTickets from '../hooks/api/useTicket';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const TicketChoise = () => {
  const { eventInfo } = useContext(EventInfoContext);
  const { ticket, ticketLoading } = getEventTickets();

  /* para a msg de erro, se ticket === null e ticketLoading === false, imprimir msg, favor deletar esse comentario depois xD */

  if (ticketLoading) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

  return ticket !== null && ticketLoading === false ? (
    <Container>
      <DashboardTitle>Ingresso e pagamento</DashboardTitle>
      <h6>Primeiro, escolha sua modalidade de ingresso</h6>
      <section className="cardsSection">
        {ticket.map((ticket, index) => (
          <TicketCards isActive={false} key={index} width={'145px'}>
            <p>{ticket.type}</p>
            <p className="price">R$ {ticket.price}</p>
          </TicketCards>
        ))}
      </section>
    </Container>
  ) : (
    <>
      <DashboardTitle>Ingresso e pagamento</DashboardTitle>
      <Warning>
        <h1>
          Você precisa completar sua inscrição antes <br />
          de prosseguir pra escolha de ingresso
        </h1>
      </Warning>
    </>
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

const Warning = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8e8e8e;
  text-align: center;
  font-size: 20px;
`;
