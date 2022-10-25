import React, { useState } from 'react';
import styled from 'styled-components';

function TicketCards(props) {
  return (
    <Container
      width={props.width}
      active={props.children[0].props.children === props.cardActive.type ? true : false}
      onClick={() => {
        if (!(props.children[0].props.children === props.cardActive.type)) {
          if (props.children[0].props.children === 'Online') props.setHostingActive('');
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
  min-width: 145px;
  box-sizing: border-box;
  padding: 0 30px 0 30px;
  width: ${(props) => (props.width ? `${props.width}` : 'fit-content')};
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
