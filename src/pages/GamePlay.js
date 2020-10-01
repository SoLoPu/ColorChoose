import React, { Component } from 'react';
import "../css/gameplay.css";
import Shape from "../component/Shape";
import dataColor from "../data/dataColor"
import dataShape from "../data/dataShape"

const randomColor = (n) => {
    let colorArr = [];
    for(let i = 0; i < n; i++){
        let color = dataColor[Math.floor(Math.random()*dataColor.length)];
        // let shape = dataShape[Math.floor(Math.random()*dataShape.length)]
        if(colorArr.includes(color)){
            i--;
        }
        else{
            colorArr.push({color:color, shape:'square'});
            // colorArr.push({color:color, shape:shape})
        }
        
    }
    console.log(colorArr);
    return colorArr;
}


export default class GamePlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            round: 1,
            time: 5,
            player1: 0,
            player2: 0,
            active: false,
            colors: [
                "red",
                "blue",
                "yellow",
                "black"
            ],
            shapes: [
            ]
        }
        this.countDown = this.countDown.bind(this);
    }
    render() {
        return (
            <div className="about-wrapper">
                <h1>RoomName {this.state.round}</h1>
                <p className="count-down">{this.state.time}</p>
                {this.state.active &&
                <div className="result" style={{backgroundColor:this.state.colors[Math.floor(Math.random()*4)].color}}></div>}
                <div className="score">

                    <div className="player">
                        <h1>Player 1</h1>
                        <p>{this.state.player2}</p>
                    </div>
                    <div className="player">
                        <h1>Player 2</h1>
                        <p>{this.state.player2}</p>
                    </div>  
                    
                </div>
                <div className="container">
                    {
                        this.state.colors.map(item => 
                            <Shape shape={!this.state.active ? item.shape : "square"} color={!this.state.active ?  item.color : "white"} style={!this.state.active? {} : {border:"1px solid black"}} key={item.color} />
                        )
                    }
                </div>

            </div>

        )
        
    }


    countDown(){
        let component = this;
        // Set the date we're counting down to
      

        // Update the count down every 1 second
        var x = setInterval(function() {

        
       component.setState({
            time: component.state.time - 1
       })

        // If the count down is finished, write some text
        if (component.state.time <= 0) {
            component.setState({
                time: 0
           });
           let arrWhite = component.state.colors;
           
           component.setState({
                active:true
           })
            clearInterval(x);
            
        }
        }, 1000);
    }

    componentDidMount(){
        this.countDown();
        this.setState({
            colors: randomColor(4)
        })

    }

    
        
}