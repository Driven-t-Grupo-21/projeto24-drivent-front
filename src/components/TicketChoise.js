import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import getEventTickets from '../hooks/api/useTicket';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import DashboardTitle from './DashboardTitle';
import TicketCards from './TicketCards';
import EventInfoContext from '../contexts/EventInfoContext';

const TicketChoise = () => {
  const { eventInfo } = useContext(EventInfoContext);
  const [cardActive, setCardActive] = useState('');
  const { ticket, ticketLoading } = getEventTickets();
  const isEnrolled = true;

  /* para a msg de erro, se ticket === null e ticketLoading === false, imprimir msg, favor deletar esse comentario depois xD */

  if (ticketLoading) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

  console.log(eventInfo);

  function PutHotelCards() {
    return (
      <>
        <h6>Ótimo! Agora escolha sua modalidade de hospedagem</h6>
        <section className="cardsSection">
          {eventInfo.Ticket.map((ticket, index) => (
            <>
              <TicketCards isActive={false} key={index} cardActive={cardActive} setCardActive={setCardActive}>
                <p>{ticket.type}</p>
                <p className="price">R$ {ticket.price}</p>
              </TicketCards>
            </>
          ))}
        </section>
      </>
    );
  }

  return isEnrolled ? (
    <Container>
      <DashboardTitle>Ingresso e pagamento</DashboardTitle>
      <h6>Primeiro, escolha sua modalidade de ingresso</h6>
      <section className="cardsSection">
        {eventInfo.Ticket.map((ticket, index) => (
          <>
            <TicketCards isActive={false} key={index} cardActive={cardActive} setCardActive={setCardActive}>
              <p key={index + 1}>{ticket.type}</p>
              <p className="price" key={index + 2}>
                R$ {ticket.price}
              </p>
            </TicketCards>
          </>
        ))}
      </section>
      {cardActive.type === 'Presencial' ? <PutHotelCards /> : ''}
      {cardActive.type === 'Online' ? (
        <h6>Fechado! O total ficou em R$ {cardActive.value}. Agora é só confirmar:</h6>
      ) : (
        ''
      )}
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
  display: flex;
  flex-direction: column;

  .cardsSection {
    display: flex;
    gap: 25px;
    margin-bottom: 20px;
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
