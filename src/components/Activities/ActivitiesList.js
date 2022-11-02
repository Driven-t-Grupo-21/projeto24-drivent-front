import React from 'react';
import styled from 'styled-components';

function ActivitiesList() {
  return (
    <>
      <Container>
        <Button>on</Button>
      </Container>
    </>
  );
}

export default ActivitiesList;

const Container = styled.ul`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  width: 130px;
  height: 30px;
  display: flex;
  background-color: #e0e0e0;

  border: 0;
  border-radius: 5px;
`;
