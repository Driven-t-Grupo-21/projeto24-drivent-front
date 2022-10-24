import React from 'react';
import styled from 'styled-components';
import DashboardTitle from './DashboardTitle';

function DashboardWarning(props) {
  return (
    <Container>
      <DashboardTitle>{props.title}</DashboardTitle>
      <div>
        <h1>{props.children}</h1>
      </div>
    </Container>
  );
}

export default DashboardWarning;

const Container = styled.div`
  height: 100%;

  div {
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8e8e8e;
    text-align: center;
    font-size: 20px;
  }
`;
