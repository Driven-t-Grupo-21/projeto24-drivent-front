/* eslint-disable indent */
import React from 'react';
import TicketChoise from '../../../components/Ticket/TicketChoise';
import PaymentChoice from '../../../components/Payment/index';

export default function Payment() {
  const [progress, setProgress] = React.useState(1);

  switch (progress) {
    case 1:
      return <TicketChoise setProgress={setProgress} />;
    case 2:
      return <PaymentChoice />;
    default:
      return <>default</>;
  }
}
