import React, { Component } from 'react';
export default class Cell extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {  
            color: props.value
        }
    }

    changeColor = () =>{
        this.setState({color: '#333'})
    }

    render() { 
        console.log(this.state.color)
        return ( 
            <div onClick = {this.changeColor} className="cell" style={{backgroundColor: this.state.color}} ></div>
         );
    }
}
 
