import React, { useState } from 'react';
import styled from 'styled-components';
import getActivitiesByDate from '../../hooks/api/useActivitiesDate';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import DashboardLoading from '../DashboardLoading';
import { useToken } from '../../hooks/useContext';
import ActivitiesByDate from './ActivitiesByDate';

function ActivitiesList({ dates, activitiesLoading, getDates }) {
  const [selectedDate, setSelectedDate] = useState('');
  const { activities, activitiesDateError, activitiesDateLoading, getActivities } = getActivitiesByDate();
  const token = useToken();
  const [activitiesInfo, setActivitiesInfo] = useState([]);

  if (activitiesLoading) return <DashboardLoading />;

  function RenderDate({ date }) {
    const weekDay = dayjs(date.activityDate).locale('pt-br').format('dddd').replace('-feira', '');
    const formatDate = `${weekDay}, ${dayjs(date.activityDate).locale('pt-br').format('DD/MM')}`;
    return (
      <Button onClick={() => RenderActivities(date)} color={selectedDate === date ? '#FFD37D' : '#e0e0e0'}>
        {formatDate}
      </Button>
    );
  }

  async function RenderActivities(date) {
    setSelectedDate(date);
    const activitiesByDate = await getActivities(token, date.activityDate);
    // # Utilizar a variavel activities para renderizar as atividades em cada local
    setActivitiesInfo(activitiesByDate);
  }
  return (
    <>
      <Container>
        {dates.map((date, index) => (
          <RenderDate key={index} date={date} />
        ))}
      </Container>
      {activities ? <ActivitiesByDate activities={activities} /> : <></>}
      <></>
    </>
  );
}

export default ActivitiesList;

const Container = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 60px;
`;

const Button = styled.button`
  width: 130px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};

  border: 0;
  border-radius: 5px;

  cursor: pointer;
`;
