import React from 'react';
import TicketChoise from '../../../components/Ticket/TicketChoise';

export default function Payment() {
  const [progress, setProgress] = React.useState(1);

  switch (progress) {
  case 1:
    return <TicketChoise />;
  case 2:
    return <>payment</>;
  default:
    return <>default</>;
  }
}
