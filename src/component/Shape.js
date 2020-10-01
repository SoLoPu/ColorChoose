import React, { Component } from 'react';
import "../css/shape.css";



export default class Shape extends Component {
    constructor(props){
        super(props);
        this.state = {
            round: 1,
            player1: 10,
            player2: 10
        }
    }
    
    render(){
        const { shape, color } = this.props; 
        console.log(this.props)
        if(shape==="triangle"){
            return(
                <div className={shape} style={{borderBottom: "120px solid", borderBottomColor: color}}>
                </div>
            )
        }
        else{
            return(
                <div className={shape} style={{backgroundColor: color,...this.props.style}}>
                </div>
    
            )
        }
       
    }
        
}