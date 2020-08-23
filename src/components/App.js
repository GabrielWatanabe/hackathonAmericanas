import React, { Component } from "react";
import header from "../assets/img/header.PNG";
import headerAmericanas from "../assets/img/headerAmericanas.PNG";
import Surpreenda from "./meSurpreenda";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
    <Router>
      <div>
        <Switch>
            <Route path="/surpreenda" component={Surpreenda} />
            <div>
            <img className="img" src={header}></img>
            <img className="img" src={headerAmericanas}></img>
            <div className="divButtonClickOne">
                <Link to="/surpreenda">
                  <button
                    onClick={this.showSurpreenda}
                    className="buttonOne"
                  />
                </Link>
            </div>
            <div className="divButtonClickTwo">
                <button className="buttonTwo"></button>
            </div>
          </div>
        </Switch>
        )}
      </div>
    </Router>
    );
  }
}
