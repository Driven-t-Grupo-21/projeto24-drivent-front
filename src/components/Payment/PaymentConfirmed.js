import styled from 'styled-components';
import { BsFillCheckCircleFill as CheckIcon } from 'react-icons/bs';

export default function PaymentConfirmed() {
  return (
    <ConfirmedBox>
      <CheckIcon />
      <Text>
        <h2>Pagamento confirmado!</h2>
        <h3>Prossiga para escolha de hospedagem e atividades</h3>
      </Text>
    </ConfirmedBox>
  );
}

const ConfirmedBox = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 40px;
    height: 40px;
    color: #36b853;
    margin-right: 14px;
  }
`;

const Text = styled.div`
  width: 405px;
  font-size: 16px;
  line-height: 18.75px;
  color: #454545;

  h2 {
    font-weight: 700;
  }
`;
