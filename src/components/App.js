import React, { Component } from "react";
import header from "../assets/img/header.PNG";
import headerAmericanas from "../assets/img/headerAmericanas.PNG";
import Surpreenda from "./meSurpreenda";
import Profile from "./profile/index.js";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
        <img className="img" src={header}></img>
        <Router>
          <Link to="/" className="goToHomeLink"></Link>
          <Link to="/profile" className="goToProfileLink"></Link>
          <div>
            <Switch>
              <Route path="/surpreenda" component={Surpreenda} />
              <Route path="/profile" component={Profile} />
              <div>
                <img className="img" src={headerAmericanas}></img>
                <Link
                  to="/surpreenda"
                  className="divButtonClickOne"
                  onClick={this.showSurpreenda}
                />
                <Link
                  to="/meri"
                  className="divButtonClickTwo"
                  className="divButtonClickTwo"
                />
              </div>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
