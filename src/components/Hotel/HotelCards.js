import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import RoomContext from '../../contexts/RoomContext';
import ReservationSummaryContext from '../../contexts/ReservationSummaryContext';

function HotelCard({ hotel, setRooms }) {
  const { summary, setSummary } = useContext(ReservationSummaryContext);
  const { setRoomData, hotelData, setHotelData } = useContext(RoomContext);
  const [roomTypesMessage, setRoomTypesMessage] = useState('');

  useState(() => {
    if (hotel.hotelRoomsType.includes('Single')) setRoomTypesMessage(roomTypesMessage + 'Single');
    if (hotel.hotelRoomsType.includes('Double')) setRoomTypesMessage(roomTypesMessage + 'Double');
    if (hotel.hotelRoomsType.includes('Triple')) setRoomTypesMessage(roomTypesMessage + 'Triple');
  }, []);

  return (
    <Container
      onClick={() => {
        setRoomData('');
        setRooms(hotel.Rooms);
        setSummary({ hotel: hotel.name, hotelPicture: hotel.logoImageUrl });
        setHotelData(hotel);
      }}
      isActive={hotelData.id === hotel.id ? true : false}
    >
      <img src={hotel.logoImageUrl} alt={hotel.name} />
      <div className="hotelInfo">
        <h6>{hotel.name}</h6>
        <HotelSubtitle>Tipos de Acomodação:</HotelSubtitle>
        <p>{roomTypesMessage}</p>
        <HotelSubtitle>Vagas disponíveis:</HotelSubtitle>
        <p>{hotel.availableHotelBeds}</p>
      </div>
    </Container>
  );
}

export default HotelCard;

const Container = styled.li`
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 264px;
  flex-shrink: 0;
  background-color: ${(props) => (props.isActive ? '#FFEED2' : '#f1f1f1')};
  margin-bottom: 10px;
  border-radius: 10px;
  cursor: pointer;

  img {
    height: 110px;
    border-radius: 5px;
    max-width: 100%;
    margin-bottom: 10px;
  }

  .hotelInfo {
    width: 100%;
    color: #3c3c3c;
    display: flex;
    flex-direction: column;
    gap: 3px;

    h6 {
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 10px;
      color: #343434;
    }

    p {
      font-size: 12px;
      margin-bottom: 14px;
    }
  }
`;

const HotelSubtitle = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
`;
