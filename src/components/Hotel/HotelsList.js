import React from 'react';
import styled from 'styled-components';
import HotelCard from './HotelCards';
import HotelRooms from './HotelRooms';

function HotelsList({ hotels }) {
  const [rooms, setRooms] = React.useState();

  return (
    <>
      <Container>
        {hotels.hotelsAvailable.map((hotel) => {
          return (
            <>
              <HotelCard hotel={hotel} setRooms={setRooms} />
            </>
          );
        })}
      </Container>
      {rooms ? <HotelRooms rooms={rooms} /> : null}
    </>
  );
}

export default HotelsList;

const Container = styled.ul`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  margin-top: 20px;
  margin-bottom: 50px;

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
