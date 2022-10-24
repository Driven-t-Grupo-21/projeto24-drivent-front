import styled from 'styled-components';
import { useContext } from 'react';

import TicketSummaryContext from '../../contexts/TicketSummaryContext';

export default function TicketSummary() {
  const { summary } = useContext(TicketSummaryContext);
  let accommodation = summary.hosting ? 'Com Hotel' : 'Sem hotel';
  return (
    <SummaryBox>
      {summary.event === 'Online' ? (
        <h2>{summary.event}</h2>
      ) : (
        <h2>
          {summary.event} + {accommodation}
        </h2>
      )}
      <h3>R$ {summary.value}</h3>
    </SummaryBox>
  );
}

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
