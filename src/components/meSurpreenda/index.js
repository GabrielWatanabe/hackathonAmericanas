import React, { Component } from  'react';
import header from '../../assets/img/header.PNG'

import './styles.css'

export default class Surpreenda extends Component {
    render() {
        return(
            <div className="container"> 
            <img className="img" src={header}></img>
                <div className="header">
                    <div className="filter">
                       <h1>Qaunto você quer pagar?</h1>
                       <label>R$</label>
                       <input type="text"></input>
                       <h1>Qaul tipo de item você quer?</h1>
                       <input type="text"></input>
                    </div>
                    <div className="vl"></div>
                    <div>
                        <h1>Completar o carrinho para frete grátis?</h1>
                        <button>Clique aqui</button>
                        <label>Sim</label>
                    </div>
                </div>
            </div>
        )
    }
}