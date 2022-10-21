import React, { useState } from 'react';
import styled from 'styled-components';

function TicketCards(props) {
  return (
    <Container
      active={props.children[0].props.children === props.cardActive.type ? true : false}
      onClick={() => {
        if (!(props.children[0].props.children === props.cardActive.type)) {
          props.setCardActive({ type: props.children[0].props.children, value: props.children[1].props.children[1] });
        }
      }}
    >
      {props.children}
    </Container>
  );
}

export default TicketCards;

const Container = styled.div`
  border: ${(props) => (props.active ? '1px solid #FFEED2' : '1px solid rgba(0, 0, 0, 0.3)')};
  width: 145px;
  height: 145px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  font-size: 16px;
  margin-top: 20px;
  background-color: ${(props) => (props.active ? '#FFEED2' : 'transparent')};
  cursor: pointer;

  .price {
    opacity: 0.5;
    font-size: 14px;
  }
`;
