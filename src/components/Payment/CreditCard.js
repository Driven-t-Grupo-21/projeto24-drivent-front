import styled from 'styled-components';
import React, { useState, useContext } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import TicketSummaryContext from '../../contexts/TicketSummaryContext';
import { createOrder } from '../../services/orderApi';
import { useToken } from '../../hooks/useContext';

import { toast } from 'react-toastify';

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
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm" className="component">
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
            className="big"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <p>E.g.: 49..., 51..., 36..., 37...</p>
          <input
            type="tel"
            name="name"
            placeholder="Name"
            className="big"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <div className="side">
            <input
              type="tel"
              name="expiry"
              placeholder="Valid Thru"
              className="small"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              className="smaller"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
        </form>
      </div>
    );
  }
}

async function PayOrder(body, setConfirmed, token) {
  try {
    await createOrder(body, token);
    toast('Ingresso reservado com sucesso');
    setConfirmed(true);
  } catch (err) {
    toast('Não foi possível reservar o ingresso');
    console.log(err);
  }
}

export default function CreditCard() {
  const { summary, setConfirmed } = useContext(TicketSummaryContext);
  const token = useToken();

  return (
    <Container>
      <CreditCardComponent>
        <PaymentForm />
      </CreditCardComponent>
      <button
        className="bookingButton"
        onClick={() => {
          PayOrder(summary, setConfirmed, token);
        }}
      >
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

  .component {
    display: flex;
  }

  form {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
  }

  input {
    border-radius: 5px;
    border: solid 1px #c3c3c3;
    margin-bottom: 15px;
    height: 40px;
    font-size: 17px;
    padding-left: 10px;
  }

  .big {
    width: 300px;
  }

  p {
    margin-top: -12px;
    margin-bottom: 10px;
    color: #c3c3c3;
    font-size: 15px;
  }

  .small {
    width: 190px;
    margin-right: 10px;
  }

  .smaller {
    width: 100px;
  }

  .side {
    display: flex;
  }
`;
