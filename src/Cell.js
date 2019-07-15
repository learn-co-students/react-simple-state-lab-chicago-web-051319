import React, { Component } from 'react';


export default class Cell extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.state={
      color: this.props.value
    }
  }

  color() {

    const color = this.state.value

    this.color = '#fff'

    this.setState({
      color: '#333'
    })
  }


  render(){
    return(
      <div onClick = {() => this.color()} className="cell" style={{backgroundColor: this.state.color}}>
    
      </div>

    )

  }
}
