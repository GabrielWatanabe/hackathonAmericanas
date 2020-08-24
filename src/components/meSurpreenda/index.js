import React, { Component } from "react";
import header from "../../assets/img/header.PNG";
import gift from "../../assets/img/gift.png";
import meSurpreenda from "../../assets/img/meSurpreenda.PNG";
import ItemSorte from "../itemSort";
import button from "../../assets/img/search.png";
import record from "../../assets/img/record.png";
import  Dictaphone  from '../speechRecognition/speechRecognition'
import "./styles.css";

const list = [
  "Tablets",
  "Celulares",
  "Bebidas",
  "Fraldas",
  "Chocolates",
  "Perfumaria",
  "Shampoo",
  "Sapatos",
  "Informática",
];

export default class Surpreenda extends Component {
  constructor() {
    super();

    this.state = {
      searchItem: false,
      searchItems: false,
      clickButton: false,
      record: false,
    };

    this.searchItem = this.searchItem.bind(this);
    this.clickButton = this.clickButton.bind(this);
    this.recordSound = this.recordSound.bind(this);
  }

  searchItem() {
    this.setState({
      searchItems: true,
    });
  }

  clickButton() {
    // console.log(value)
    this.setState({
      searchItem: true,
      divImageGift: true,
    });
  }

  recordSound() {
    this.setState({
        record: true,
      });
    return <Dictaphone />
  }

  

  render() {
    return (
      <div className="container">
          {/* {this.state.record ? */}
        {/* <img className="img" src={header}></img> */}
        <div className="containerAlign">
          <img className="surpreenda" src={meSurpreenda}></img>
          <div className="header">
            <div className="filter">
              <h1>Quanto você quer pagar?</h1>
              <label className="dollarSign">R$</label>
              <input className="inputPay" type="text"></input>
              <h1>Qual tipo de item você quer?</h1>
              <input className="inputPay" type="text"></input>
              <img className="search" src={button} onClick={this.searchItem} />
              <Dictaphone {...this.props} />
              {/* <img className="record" src={record} onClick={() => <Dictaphone />} /> */}
              <div className="itemsType">
                {this.state.searchItems && (
                  <button className="itemType">Chocolates</button>
                )}
              </div>
            </div>
            <div className="vl"></div>
            <div className="frete">
              <h1>Completar o carrinho para frete grátis?</h1>
              <div className="checkbox">
                <input type="checkbox" className="buttonFrete"></input>
                <label>Sim</label>
              </div>
              <button onClick={this.clickButton} className="buttonSurpreenda">
                Me surpreenda!
              </button>
            </div>
            <div
              className={
                this.state.divImageGift ? "divImageGiftTrue" : "divImageGift"
              }
            >
              {this.state.searchItem ? (
                <ItemSorte></ItemSorte>
              ) : (
                <img src={gift} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
