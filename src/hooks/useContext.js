import { useContext } from 'react';

import UserContext from '../contexts/UserContext';
import EventInfoContext from '../contexts/EventInfoContext';

export function useToken() {
  const { userData: user } = useContext(UserContext);

  return user.token;
}

export function useEventInfo() {
  const { eventInfo } = useContext(EventInfoContext);
  return eventInfo;
}
