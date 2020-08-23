import React, { Component } from 'react';
import header from '../assets/img/headerAmericanas.PNG'
import Surpreenda from './meSurpreenda'

export default class App extends Component {
    render() {
        return(
            <div>
                <img src={header}></img>
                <Surpreenda></Surpreenda>
            </div>

        )
    }
}