import styled from 'styled-components';

export default function TicketSummary() {
  const summary = {
    type: 'Presencial',
    accommodation: 'Com Hotel',
    totalPrice: 500,
  };

  return (
    <Container>
      <h1>Ingresso escolhido</h1>
      <SummaryBox>
        <h2>
          {summary.type} + {summary.accommodation}
        </h2>
        <h3>R$ {summary.totalPrice}</h3>
      </SummaryBox>
    </Container>
  );
}

const Container = styled.div`
  h1 {
    font-size: 20px;
    color: #8e8e8e;
    margin-bottom: 18px;
  }
`;

const SummaryBox = styled.div`
  width: 290px;
  height: 108px;
  border-radius: 20px;
  background-color: #ffeed2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  h2 {
    font-size: 16px;
    color: #454545;
    margin-bottom: 8px;
  }
  h3 {
    font-size: 14px;
    color: #898989;
  }
`;
