import React from 'react';
import styled from 'styled-components';

function DashboardSubtitle({ children }) {
  return <Container>{children}</Container>;
}

export default DashboardSubtitle;

const Container = styled.h6`
  opacity: 0.5;
  font-size: 20px;
`;
