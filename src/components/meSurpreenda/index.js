import React, { Component } from "react";
import header from "../../assets/img/header.png";

import "./styles.css";

export default class Surpreenda extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="filter">
            <h1>Quanto você quer pagar?</h1>
            <label className="dollarSign">R$</label>
            <input className="inputPay" type="text"></input>
            <h1>Qual tipo de item você quer?</h1>
            <input className="inputPay" type="text"></input>
          </div>
          <div className="vl"></div>
          <div>
            <h1>Completar o carrinho para frete grátis?</h1>
            <button>Clique aqui</button>
            <label>Sim</label>
          </div>
        </div>
      </div>
    );
  }
}
