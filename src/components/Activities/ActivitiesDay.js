import styled from 'styled-components';
import { BiExit, BiXCircle, BiCheckCircle } from 'react-icons/bi';

export default function ActivitiesDays() {
  return (
    <Container>
      <Columns>
        <h2>Auditório Principal</h2>
        <Box>
          <ActivityBox heigth={'80px'} selected={false}>
            <div>
              <h3>Minecraft: montando o PC ideal</h3>
              <h4>09:00 - 10:00</h4>
            </div>
            <RightSide soldOut={false}>
              <BiExit />
              <h4>20 vagas</h4>
            </RightSide>
          </ActivityBox>
          <ActivityBox heigth={'80px'} selected={true}>
            <div>
              <h3>Minecraft: montando o PC ideal</h3>
              <h4>09:00 - 10:00</h4>
            </div>
            <RightSide soldOut={false}>
              <BiCheckCircle />
              <h4>Inscrito</h4>
            </RightSide>
          </ActivityBox>
        </Box>
      </Columns>

      <Columns>
        <h2>Auditório Lateral</h2>
        <Box className="middle">
          <ActivityBox heigth={'160px'} selected={false}>
            <div>
              <h3>Minecraft: montando o PC ideal</h3>
              <h4>09:00 - 10:00</h4>
            </div>
            <RightSide soldOut={true}>
              <BiXCircle />
              <h4>Esgotado</h4>
            </RightSide>
          </ActivityBox>
        </Box>
      </Columns>

      <Columns>
        <h2>Sala de Workshop</h2>
        <Box></Box>
      </Columns>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 17px;
    color: #7b7b7b;
    line-height: 19.92px;
    margin-bottom: 13px;
  }
`;

const Box = styled.div`
  width: 288px;
  height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #d7d7d7;

  &.middle {
    border-right: 0px;
    border-left: 0px;
  }
`;

const ActivityBox = styled.div`
  width: 265px;
  height: ${(props) => props.heigth};
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? '#d0ffdb' : '#f1f1f1')};
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 10px;

  h3 {
    font-size: 12px;
    font-weight: 700;
    color: #343434;
    margin-bottom: 6px;
  }
  h4 {
    font-size: 12px;
    font-weight: 400;
    color: #343434;
  }
  div {
    border-color: ${(props) => (props.selected ? '#99E8A1' : '#cfcfcf')};
  }
`;

const RightSide = styled.div`
  padding-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid;

  svg {
    width: 16px;
    height: 16px;
    color: ${(props) => (props.soldOut ? '#CC6666' : '#078632')};
  }
  h4 {
    font-size: 9px;
    line-height: 10.55px;
    margin-top: 4px;
    color: ${(props) => (props.soldOut ? '#CC6666' : '#078632')};
  }
`;
