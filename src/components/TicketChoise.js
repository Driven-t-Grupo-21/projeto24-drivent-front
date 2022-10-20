import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import DashboardTitle from './DashboardTitle';
import TicketCards from './TicketCards';
import EventInfoContext from '../contexts/EventInfoContext';
import useToken from '../hooks/useToken';
import * as enrollmentApi from '../services/enrollmentApi';

let isEnrolled = false;

const TicketChoise = () => {
  const { eventInfo } = useContext(EventInfoContext);
  const token = useToken();
  let req;

  useEffect(() => {
    req = enrollmentApi.getPersonalInformations(token);

    req.then((response) => {
      if (response.id !== null) {
        isEnrolled = true;
      }
    });
    req.catch((err) => {
      console.log(err);
    });
  });

  return (<> {(isEnrolled) ?
    (
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
    ) : (<>
      <DashboardTitle>Ingresso e pagamento</DashboardTitle>
      <Warning><h1>Você precisa completar sua inscrição antes <br/>
      de prosseguir pra escolha de ingresso</h1></Warning>
    </>)
  }
  </>);
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
  color: #8E8E8E;
  text-align: center;
  font-size: 20px;
`;
