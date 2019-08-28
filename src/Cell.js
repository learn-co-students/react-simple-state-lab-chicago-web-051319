import React, {Component} from 'react'

export default class Cell extends Component{

    constructor(props){
        super(props)
        this.state = {
            //color: this.props.value
            color: this.props.value
        }
    }

    clickOnMe = ()=>{
        //console.log("Cream Freiche")
        this.setState({color: '#333'})
    }

    render(){
        //console.log(this.props.value)
        //console.log("Running")
        //return <div className="cell" onClick={this.setState({color: '#333'})} style={{backgroundColor: this.state.color}}></div>
        return <div className = 'cell'  style={{backgroundColor: this.state.color}} onClick={this.clickOnMe}></div>
    }
}