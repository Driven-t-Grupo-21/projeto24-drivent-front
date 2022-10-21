import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import DashboardTitle from './DashboardTitle';
import TicketCards from './TicketCards';
import EventInfoContext from '../contexts/EventInfoContext';

const TicketChoise = () => {
  const { eventInfo } = useContext(EventInfoContext);
  const [cardActive, setCardActive] = useState('');

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

  return (
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
