import React, { Component } from 'react';
import "../css/gameplay.css";
import Shape from "../component/Shape";



export default class GamePlay extends Component {
    constructor(props){
        super(props);
        this.state = {
            round: 1,
            time: 10,
            player1: 0,
            player2: 0,
            colors: [
                "red",
                "blue",
                "yellow",
                "black"
            ]
        }
        this.countDown = this.countDown.bind(this);
    }

    onClickAnswer() {

    }


    render(){
        return(
            <div className="about-wrapper">
                <h1>RoomName {this.state.round}</h1>
                <p className="count-down">{this.state.time}</p>
                <div className="result"></div>
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
                            <Shape shape="square" color={item} />
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
            clearInterval(x);
            
        }
        }, 1000);
    }

    componentDidMount(){
        this.countDown();
    }

    
        
}