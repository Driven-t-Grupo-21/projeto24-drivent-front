import React, { useState } from 'react';
import styled from 'styled-components';
import getActivitiesInfos from '../../hooks/api/useActivities';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import DashboardLoading from '../DashboardLoading';

function ActivitiesList() {
  const { dates, activitiesLoading, getDates } = getActivitiesInfos();

  if (activitiesLoading) return <DashboardLoading />;

  function RenderDate({ date }) {
    const weekDay = dayjs(date.activityDate).locale('pt-br').format('dddd').replace('-feira', '');
    const formatDate = `${weekDay}, ${dayjs(date.activityDate).locale('pt-br').format('DD/MM')}`;
    return <Button onClick={() => RenderActivities(date)}>{formatDate}</Button>;
  }

  function RenderActivities(date) {
    console.log(date);
  }
  return (
    <>
      <Container>
        {dates.map((date, index) => (
          <RenderDate key={index} date={date} />
        ))}
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
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;

  border: 0;
  border-radius: 5px;

  cursor: pointer;
`;
