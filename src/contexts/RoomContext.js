import { createContext, useState } from 'react';

const RoomContext = createContext();
export default RoomContext;

export function RoomProvider({ children }) {
  const [roomData, setRoomData] = useState('');

  return <RoomContext.Provider value={{ roomData, setRoomData }}>{children}</RoomContext.Provider>;
}