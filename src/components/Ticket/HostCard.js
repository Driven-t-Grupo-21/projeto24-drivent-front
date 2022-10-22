import React, { useState } from 'react';
import styled from 'styled-components';

export function PutHotelCards({ hostingActive, setHostingActive }) {
  const hostingTypes = [
    { type: 'Sem hotel', price: 0 },
    { type: 'Com hotel', price: 350 },
  ];
  return (
    <>
      <h6>Ótimo! Agora escolha sua modalidade de hospedagem</h6>
      <section className="cardsSection">
        {hostingTypes.map((item, index) => (
          <>
            <HostCards isActive={false} key={index} hostingActive={hostingActive} setHostingActive={setHostingActive}>
              <p>{item.type}</p>
              <p className="price">+ R$ {item.price}</p>
            </HostCards>
          </>
        ))}
      </section>
    </>
  );
}

function HostCards(props) {
  return (
    <Container
      width={props.width}
      active={props.children[0].props.children === props.hostingActive.type ? true : false}
      onClick={() => {
        if (!(props.children[0].props.children === props.hostingActive.type)) {
          props.setHostingActive({
            type: props.children[0].props.children,
            value: props.children[1].props.children[1],
          });
        }
      }}
    >
      {props.children}
    </Container>
  );
}

export default HostCards;

const Container = styled.div`
  border: ${(props) => (props.active ? '1px solid #FFEED2' : '1px solid rgba(0, 0, 0, 0.3)')};
  width: 145px;
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
