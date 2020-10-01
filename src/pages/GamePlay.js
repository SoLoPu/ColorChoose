import React, { Component } from 'react';
import "../css/gameplay.css";



export default class GamePlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            round: 1
        }
    }
    render() {
        return (
            <div className="about-wrapper">
                <h1>RoomName {this.state.round}</h1>
                <p className="count-down">10s</p>
                <div className="result"></div>
                <div className="score">
                    <div className="player">
                        <h1>Player 1</h1>
                        <p>100</p>
                    </div>
                    <div className="player">
                        <h1>Player 2</h1>
                        <p>100</p>
                    </div>

                </div>
                <div className="container">
                    <div className="answer"></div>
                    <div className="answer"></div>
                    <div className="answer"></div>
                    <div className="answer"></div>
                </div>

            </div>

        )
    }

}