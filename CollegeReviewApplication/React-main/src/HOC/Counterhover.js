import React, { Component } from 'react'
import EnComponent from './Hoc'

class Counterhover extends Component {
    
    render() {
      const{count,inc}=this.props
     return (
      <div>
      <h1 onMouseEnter={inc}>Hover Me{count}</h1>
      </div>
    )
  }
  
}
export default EnComponent(Counterhover)