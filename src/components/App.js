import React, { Component } from "react";
import header from "../assets/img/headerAmericanas.PNG";
import Surpreenda from "./meSurpreenda";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import ProfileRouter from "./profile/ProfileRouter";
import styles from "./App.module.css";

export default class App extends Component {
  render() {
    return (
      <div className={styles.mainAppDiv}>
        <BrowserRouter>
          <img src={header}></img>
          <Routes>
            <Route path="/" element={<Surpreenda></Surpreenda>} />
          </Routes>
          <Link
            to="/profile"
            element={<ProfileRouter />}
            className={styles.profileOnClick}
          />
          {/* <Surpreenda></Surpreenda> */}
        </BrowserRouter>
      </div>
    );
  }
}
