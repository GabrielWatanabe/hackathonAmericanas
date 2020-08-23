import React, { Component } from 'react';
import img from '../../assets/img/caixadebombom.png'
import './styles.css'

export default class ItemSorte extends Component {
    constructor() {
        super();
    
        this.state = {
          json: [],
        };
        this.searchItem = this.searchItem.bind(this);
      }
    
      
    searchItem() {
        this.setState({
            json: true,
          });
    }

    render() {
        return(
            <div className="divMain">
                <img className="imgMain marginItem" src={img} />
                <label>Caixa de bombom 250g Garoto</label>
                <label className="valueItem marginItem">R$8,99</label>
                <button className="buttonMain marginItem">Comprar</button>
            </div>
        )
    }
}