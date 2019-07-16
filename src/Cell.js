import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
  super(props)
    this.state = {
      color: props.value
    }
  }
  changeState(event){
    this.setState({
      color: "#333"
    })
  }

  render() {
    return (
      <div onClick={(e)=>this.changeState(e)} className="cell" style={{backgroundColor:this.state.color}}>

      </div>
    )
  }

}
