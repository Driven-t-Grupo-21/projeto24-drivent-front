import styled from 'styled-components';
import ButtonBox from './ButtonBox';
import Typography from '@material-ui/core/Typography';
export default function TicketTypes() {

  return (
    <>
      <StyledTypography variant="h4">Suas Informações</StyledTypography>
      <SubTitle variant="h6">Primeiro, escolha sua modalidade de ingresso</SubTitle>

      <ButtonBox message="botão" value="250"/>
      <ButtonBox message="botão" value="250"/>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const SubTitle = styled(Typography)`
  margin-bottom: 20px !important;
  color: #8e8e8e;
`;
