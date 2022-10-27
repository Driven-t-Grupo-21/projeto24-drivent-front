import React, { useState } from 'react';
import { BsPerson, BsFillPersonFill } from 'react-icons/bs';

import styled from 'styled-components';

import getEventHotelsInfo from '../../hooks/api/useHotel';
import DashboardLoading from '../DashboardLoading';
import DashboardSubtitle from '../DashboardSubtitle';
import DashboardTitle from '../DashboardTitle';
import DashboardWarning from '../DashboardWarning';

function HotelPage() {
  const { hotel, hotelLoading, hotelError } = getEventHotelsInfo();

  const [selectedRoom, setSelectedRoom] = useState('');

  if (hotelLoading) return <DashboardLoading />;

  /* alterar a msg de erro para imprimir conforme figma, e apagar o comentário */
  if (hotelError) return <DashboardWarning title="Escolha de hotel e quarto">{hotelError}</DashboardWarning>;

  console.log(hotel, hotelLoading, hotelError);
  const allRooms = hotel.roomsAvailable[0].Rooms;

  function ShowRooms({ allRooms }) {
    return (
      <RoomsBox>
        {allRooms.map((room, index) => {
          return (
            <Room
              disabled={room.availableBeds === 0 ? true : false}
              onClick={() => setSelectedRoom(room.id)}
              backColor={selectedRoom === room.id ? '#FFEED2' : 'transparent'}
            >
              <p>{index + 1}</p>
              <Icons>
                <BsPerson size={25} />
                <BsPerson size={25} />
                <BsFillPersonFill size={25} color={selectedRoom === room.id ? '#FF4791' : '#000000'} />
              </Icons>
            </Room>
          );
        })}
      </RoomsBox>
    );
  }
  return (
    <>
      <DashboardTitle>Escolha de hotel e quarto</DashboardTitle>
      <DashboardSubtitle>Primeiro escolha seu hotel</DashboardSubtitle>
      <ShowRooms allRooms={allRooms} />
      {selectedRoom === '' ? (
        ''
      ) : (
        <Button className="bookingButton" onClick={() => console.log(selectedRoom)}>
          RESERVAR QUARTO
        </Button>
      )}
    </>
  );
}

export default HotelPage;

const RoomsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: 160px;
  height: 40px;
  border: 0;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);

  margin-top: 20px;

  font-size: 14px;

  cursor: pointer;
`;

const Icons = styled.div`
  width: 50%;
`;

const Room = styled.button`
  width: 190px;
  height: 45px;
  display: flex;

  margin: 0 15px 15px 0;

  border-radius: 10px;
  border: 1px solid grey;
  cursor: pointer;

  background-color: ${(props) => props.backColor};

  * {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    width: 50%;

    font-size: 20px;
    font-weight: bold;
  }
`;
