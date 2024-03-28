import React, { Component } from 'react'

export default class KeyEx extends Component {
  render() {
    const cars = [
        {model:"Nano",id:1},
        {model:"800",id:2},
        {model:"BMW",id:3}
    ];
    return(
        <div><center>
        <h1>
        {cars.map((val)=><li key={val.id}>{val.model}</li>)}
        </h1></center>
        </div>

    )
    
  }
}
