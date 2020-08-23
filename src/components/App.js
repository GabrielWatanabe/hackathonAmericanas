import React, { Component } from "react";
import header from "../assets/img/header.PNG";
import headerAmericanas from "../assets/img/headerAmericanas.PNG";
import Surpreenda from "./meSurpreenda";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };
    this.showSurpreenda = this.showSurpreenda.bind(this);
  }

  showSurpreenda() {
    console.log(this.state.clicked);
    this.setState({
      clicked: true,
    });
  }

  render() {
    return (
      <div>
        {this.state.clicked ? (
          <Surpreenda />
        ) : (
          <div>
            <img className="img" src={header}></img>
            <img className="img" src={headerAmericanas}></img>
            <div className="divButtonClickOne">
              <button
                onClick={this.showSurpreenda}
                className="buttonOne"
              ></button>
            </div>
            <div className="divButtonClickTwo">
              <button className="buttonTwo"></button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
