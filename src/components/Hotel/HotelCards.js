import React, { useState } from 'react';
import styled from 'styled-components';

function HotelCard({ hotel, setRooms }) {
  const [isActive, setIsActive] = useState(false);
  let roomTypesMessage = [];

  useState(() => {
    if (hotel.hotelRoomsType.includes('Single')) roomTypesMessage.push('Single');
    if (hotel.hotelRoomsType.includes('Double')) roomTypesMessage.push('Double');
    if (hotel.hotelRoomsType.includes('Triple')) roomTypesMessage.push('Triple');
  }, []);

  return (
    <Container
      onClick={() => {
        setRooms(hotel.Rooms);
        setIsActive(!isActive);
      }}
      isActive={isActive}
    >
      <img
        src="https://www.melhoresdestinos.com.br/wp-content/uploads/2021/04/resort-salinas-maragogi-capa-05.jpg"
        alt={hotel.name}
      />
      <div className="hotelInfo">
        <h6>{hotel.name}</h6>
        <HotelSubtitle>Tipos de Acomodação:</HotelSubtitle>
        <p>{roomTypesMessage.join(', ')}</p>
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
