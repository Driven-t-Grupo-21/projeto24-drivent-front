import { useState } from 'react';
import styled from 'styled-components';

export default function ButtonBox({ message, value }) {
  const [backgroundColor, setBackgroundColor] = useState(true);
  return (
    <StyleButtonBox
      color={backgroundColor ? 'transparent' : '#FFEED2'}
      onClick={() => setBackgroundColor(!backgroundColor)}
    >
      <p>{message}</p>
      <p>R$ {value}</p>
    </StyleButtonBox>
  );
}

const StyleButtonBox = styled.button`
  width: 145px;
  height: 145px;

  border: 1px solid #cecece;
  border-radius: 20px;
  background-color: ${(props) => props.color};
  margin: 0 20px 20px 0;

  font-size: 16px;

  p {
    :nth-child(2) {
      font-size: 14px;
      color: #898989;
    }
  }
`;
