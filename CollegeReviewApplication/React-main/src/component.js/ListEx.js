import React, { Component } from 'react'

export default class ListEx extends Component {
  render() {
      const cars=["Nano","800","Breeza","BMW"]
      
     
    return (
       <div>
      <h1>{cars.map((val)=><li>{val}</li>)}</h1>
    </div>
      )
      
    
  }
}

