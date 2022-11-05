import React from 'react';
import styled from 'styled-components';
import DashboardWarning from '../DashboardWarning';
import HotelCard from './HotelCards';
import HotelRooms from './HotelRooms';

function HotelsList({ hotels, setProgress, setIsChangeRoom }) {
  const [rooms, setRooms] = React.useState();

  return (
    <>
      <Container>
        {hotels.hotelsAvailable.map((hotel, index) => {
          return (
            <div key={index}>
              <HotelCard hotel={hotel} setRooms={setRooms} />
            </div>
          );
        })}
      </Container>
      {rooms ? <HotelRooms rooms={rooms} setProgress={setProgress} setIsChangeRoom={setIsChangeRoom}/> : null}
    </>
  );
}

export default HotelsList;

const Container = styled.ul`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  margin-top: 20px;
  margin-bottom: 30px;

  ::-webkit-scrollbar {
    height: 4px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
