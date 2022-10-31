import { createContext, useState } from 'react';

const RoomContext = createContext();
export default RoomContext;

export function RoomProvider({ children }) {
  const [roomData, setRoomData] = useState('');
  const [hotelData, setHotelData] = useState('');

  return (
    <RoomContext.Provider value={{ roomData, setRoomData, hotelData, setHotelData }}>{children}</RoomContext.Provider>
  );
}
