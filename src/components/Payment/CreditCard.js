import styled from 'styled-components';
import React,  { useState, useContext }  from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import TicketSummaryContext from '../../contexts/TicketSummaryContext';

class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          ...
        </form>
      </div>
    );
  }
}

export default function CreditCard() {
  const { confirmed, setConfirmed } = useContext(TicketSummaryContext);

  return (
    <Container>
      <CreditCardComponent>
        <PaymentForm />
      </CreditCardComponent>
      <button className="bookingButton" onClick={() => setConfirmed(true)}>
        FINALIZAR PAGAMENTO
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .bookingButton {
    width: 180px;
    height: 40px;
    border: 0;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);

    margin-top: 20px;

    font-size: 14px;

    cursor: pointer;
  }
`;

const CreditCardComponent = styled.div`
  display: flex;
`;
