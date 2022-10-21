import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

function DashboardTitle({ children }) {
  return <StyledTypography variant="h4">{children}</StyledTypography>;
}

export default DashboardTitle;

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
