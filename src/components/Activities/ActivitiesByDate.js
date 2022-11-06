import styled from 'styled-components';
import { useState } from 'react';
import { BiExit, BiXCircle, BiCheckCircle } from 'react-icons/bi';
import { toast } from 'react-toastify';

import activitiesHook from '../../hooks/api/useActivities';
import { bookActivitiesPost } from '../../services/activitiesApi';
import { useToken } from '../../hooks/useContext';

export default function ActivitiesByDate({ activities }) {
  /* Quando o usuário se inscrever na atividade, o icon e o texto devem mudar
  <RightSide soldOut={false}>
    <BiCheckCircle />
    <h4>Inscrito</h4>
  </RightSide> */

  function Activity({ id, description, startsAt, endsAt, vacancies }) {
    const [selected, setSelected] = useState(activities.userActivities.includes(`${id}`) ? true : false);
    const token = useToken();

    async function postBookActivity() {
      setSelected(true);

      try {
        await bookActivitiesPost(token, id);
      } catch (e) {
        if (e.response?.data.message) {
          toast(e.response?.data.message);
        } else {
          toast('Não foi possivel confirmar a inscrição nesse evento');
        }

        setSelected(false);
        console.log(e);
      }
    }

    return (
      <ActivityBox heigth={calculateBoxHeigth(startsAt, endsAt)} selected={selected}>
        <div>
          <h3>{description}</h3>
          <h4>
            {startsAt} - {endsAt}
          </h4>
        </div>
        {vacancies > 0 ? (
          !selected ? (
            <RightSide
              soldOut={false}
              onClick={() => {
                postBookActivity(id);
              }}
            >
              <BiExit />
              <h4>{vacancies} vagas</h4>
            </RightSide>
          ) : (
            <RightSide soldOut={false} style={{ cursor: 'default' }}>
              <BiCheckCircle />
              <h4>Inscrito</h4>
            </RightSide>
          )
        ) : (
          <RightSide soldOut={true}>
            <BiXCircle />
            <h4>Esgotado</h4>
          </RightSide>
        )}
      </ActivityBox>
    );
  }

  function calculateBoxHeigth(startsAt, endsAt) {
    let startNum = convertToNumber(startsAt);
    let endNum = convertToNumber(endsAt);

    return `${(endNum - startNum) * 80}px`;
  }

  function convertToNumber(hour) {
    let hourArray = hour.split(':');
    return Number(hourArray[0]);
  }

  function renderActivities(activitiesList) {
    return (
      <>
        {activitiesList.map((activity, index) => (
          <Activity
            key={index}
            id={activity.id}
            description={activity.description}
            startsAt={activity.startsAt}
            endsAt={activity.endsAt}
            vacancies={activity.vacancies}
          />
        ))}
      </>
    );
  }

  function renderColumns() {
    return activities.allActivities.map((item, index) => {
      return (
        <Columns key={index}>
          <h2>{item.localName}</h2>
          <Box>{renderActivities(item.activities)}</Box>
        </Columns>
      );
    });
  }

  return <Container>{renderColumns()}</Container>;
}

const Container = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

const Columns = styled.div`
  width: 288px;
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
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 1px;
  }

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
  cursor: ${(props) => (props.soldOut ? 'default' : 'pointer')};

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
