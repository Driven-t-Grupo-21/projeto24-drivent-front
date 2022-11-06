import styled from 'styled-components';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import TicketSummaryContext from '../../contexts/TicketSummaryContext';
import { createOrder } from '../../services/orderApi';
import { useToken } from '../../hooks/useContext';

import { toast } from 'react-toastify';

class PaymentForm extends React.Component {
  static contextType = TicketSummaryContext;
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

  payOrder = async(e, body, setConfirmed, token) => {
    e.preventDefault();
    try {
      await createOrder(body, token);
      toast('Ingresso reservado com sucesso');
      setConfirmed(true);
      setTimeout(() => this.props.navigate('/dashboard/hotel'), 1000);
    } catch (err) {
      toast('Não foi possível reservar o ingresso');
      console.log(err);
    }
  };

  render() {
    const { summary, setConfirmed } = this.context;

    return (
      <div id="PaymentForm" className="component">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form id="card-form" onSubmit={(e) => this.payOrder(e, summary, setConfirmed, this.props.token)}>
          <input
            type="tel"
            name="number"
            pattern="[\d| ]{16,22}"
            required
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
            required
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <div className="side">
            <input
              type="tel"
              name="expiry"
              placeholder="Valid Thru"
              pattern="\d\d/?\d\d"
              required
              className="small"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              pattern="\d{3,4}"
              required
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

export default function CreditCard() {
  const token = useToken();
  const navigate = useNavigate();

  return (
    <Container>
      <CreditCardComponent>
        <PaymentForm token={token} navigate={navigate}/>
      </CreditCardComponent>
      <button className="bookingButton" form="card-form" type="submit">
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
  
  @media (max-width: 600px) {
    align-items: center;
  }
`;

const CreditCardComponent = styled.div`
  display: flex;

  .component {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
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
