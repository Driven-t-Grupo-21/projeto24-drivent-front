import styled from 'styled-components';
import { useContext } from 'react';

import ReservationSummaryContext from '../../contexts/ReservationSummaryContext';

export default function ReservationSummary({ setProgress, setIsChangeRoom }) {
  const { summary: reservation } = useContext(ReservationSummaryContext);

  function roomTypeName() {
    if (reservation.roomType === 1) {
      return (reservation.roomType = 'Single');
    }
    if (reservation.roomType === 2) {
      return (reservation.roomType = 'Double');
    }
    if (reservation.roomType === 3) {
      return (reservation.roomType = 'Triple');
    }
  }

  function otherGuests() {
    if (reservation.roomType === 'Single') {
      return <h5>Somente você</h5>;
    }
    if (reservation.roomType === 'Double') {
      return <h5>Você e mais 1 pessoa</h5>;
    }
    if (reservation.roomType === 'Triple') {
      return <h5>Você e mais 2 pessoas</h5>;
    }
  }

  async function changeRoom() {
    setIsChangeRoom(true);
    setProgress(1);
  }

  return (
    <Reservation>
      <h2>Você já escolheu seu quarto:</h2>
      <SummaryBox>
        <img src={reservation.hotelPicture} alt="" />
        <h3>{reservation.hotel}</h3>
        <h4>Quarto reservado</h4>
        <h5>
          {reservation.roomNumber} ({roomTypeName()})
        </h5>
        <h4>Pessoas no seu quarto</h4>
        {otherGuests()}
      </SummaryBox>
      <button onClick={() => changeRoom()}>TROCAR DE QUARTO</button>
    </Reservation>
  );
}

const Reservation = styled.div`
  h2 {
    font-size: 20px;
    color: #8e8e8e;
    line-height: 23.44px;
    margin-bottom: 14px;
  }
  button {
    width: 196px;
    height: 37px;
    border-radius: 4px;
    background-color: #e0e0e0;
    color: #000000;
    font-size: 14px;
    outline: none;
    border: 0;
    box-shadow: 0px 2px 10px 0px #00000040;
    cursor: pointer;
  }
`;

const SummaryBox = styled.div`
  width: 196px;
  height: 264px;
  border-radius: 10px;
  background-color: #ffeed2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 14px;
  margin-bottom: 38px;

  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }
  h3 {
    width: 100%;
    font-size: 20px;
    color: #343434;
    margin: 10px 0px;
    display: flex;
    justify-content: center;
  }
  h4 {
    font-size: 12px;
    font-weight: 700;
    color: #3c3c3c;
    line-height: 14.06px;
  }
  h5 {
    font-size: 12px;
    color: #3c3c3c;
    margin-bottom: 14px;
    line-height: 14.06px;
  }
`;
