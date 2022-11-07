import React, { useContext } from 'react';

import { BsPerson, BsFillPersonFill } from 'react-icons/bs';

import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

import DashboardSubtitle from '../DashboardSubtitle';
import RoomContext from '../../contexts/RoomContext';

import styled from 'styled-components';
import { useEventInfo, useToken } from '../../hooks/useContext';
import createReserveRoom from '../../hooks/api/useRoom';
import ReservationSummaryContext from '../../contexts/ReservationSummaryContext';

function HotelRooms({ rooms, setProgress, setIsChangeRoom }) {
  const allRooms = rooms;

  const { roomLoading, reserveRoom } = createReserveRoom();

  const { id } = useEventInfo();
  const token = useToken();
  const navigate = useNavigate();

  const { roomData, setRoomData } = useContext(RoomContext);
  const { summary, setSummary } = useContext(ReservationSummaryContext);

  function ShowRooms({ allRooms }) {
    return (
      <RoomsBox>
        {allRooms.map((room, index) => {
          return <PutRoom room={room} key={index} />;
        })}
      </RoomsBox>
    );
  }

  function PutRoom({ room }) {
    let badsArray = [];
    for (let i = 0; i < room.beds; i++) {
      if (room.beds - room.availableBeds <= i) {
        badsArray.push(true);
      } else {
        badsArray.push(false);
      }
    }
    return (
      <Room
        disabled={room.availableBeds === 0 ? true : false}
        onClick={() => {
          setRoomData(room.id);
          setSummary({ ...summary, roomNumber: room.number, roomType: room.beds });
        }}
        backColor={roomData === room.id ? '#FFEED2' : 'transparent'}
      >
        <p>{room.number}</p>
        <Icons>
          {badsArray.map((bed, index) => {
            if (bed === false || (index === badsArray.length - 1 && roomData === room.id))
              return (
                <BsFillPersonFill
                  size={25}
                  color={roomData === room.id && index === badsArray.length - 1 ? '#FF4791' : ''}
                />
              );
            else return <BsPerson size={25} />;
          })}
        </Icons>
      </Room>
    );
  }

  async function CreateReserveRoom() {
    try {
      await reserveRoom(token, id, roomData);
      toast('Quarto reservado com sucesso');
      setIsChangeRoom(false);
      setProgress(2);
      navigate('/dashboard/activities');
    } catch (err) {
      console.log(err);
      toast('Não foi possível reservar o quarto');
    }
  }

  return (
    <>
      <DashboardSubtitle>Ótima pedida! Agora escolha seu quarto:</DashboardSubtitle>
      <ShowRooms allRooms={allRooms} />
      {roomData === '' ? (
        ''
      ) : (
        <Button
          className="bookingButton"
          onClick={() => {
            CreateReserveRoom();
          }}
        >
          RESERVAR QUARTO
        </Button>
      )}
    </>
  );
}

export default HotelRooms;

const RoomsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 30%;
  margin-top: 20px;
  
  @media(max-width: 600px) {
    justify-content: center;
    min-height: 100%;
  }
`;

const Button = styled.button`
  width: 160px;
  height: 40px;
  border: 0;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);

  margin-top: 20px;

  font-size: 14px;

  cursor: pointer;

  @media(max-width: 600px) {
    margin: 0 auto;
    flex-shrink: 0;
  }
`;

const Icons = styled.div`
  width: 50%;
`;

const Room = styled.button`
  width: 190px;
  height: 45px;
  display: flex;
  align-items: center;
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
