import React, { Component } from 'react';
import "../css/gameplay.css";
import Shape from "../component/Shape";
import dataColor from "../data/dataColor"
import dataShape from "../data/dataShape"

const randomColor = (n) => {
    let colorArr = [];
    let randIdx = Math.floor(Math.random()*(dataColor.length - n))

    for(let i = randIdx; i < randIdx+n; i++){
        let shape = Math.floor(Math.random()*dataShape)
        colorArr.push({color:dataColor[i], shape:"square"})
    }
    return colorArr;
}


export default class GamePlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            host: false,
            round: 5,
            time: 5,
            player1: 0,
            player2: 0,
            active: false,
            state: "start",
            colors: [
                "red",
                "blue",
                "yellow",
                "black"
            ],
            numOfShape: 4,
            shapes: [
            ]
        }
        this.countDown = this.countDown.bind(this);
        this.onClickStart = this.onClickStart.bind(this);
        this.randomColor =this.randomColor.bind(this);
    }

    
    
    render() {
        return (
            <div className="about-wrapper">
                <h1>{this.state.roomName}</h1>
                <p className="count-down">{this.state.time}</p>
                {this.state.active &&
                <div className="result" style={{backgroundColor:this.state.colors[Math.floor(Math.random()*this.state.numOfShape)].color}}></div>}
                <div className="score">

                    <div className="player">
                        <h3>Player 1</h3>
                        <p>{this.state.player1} win</p>
                    </div>
                    <div className="player">
                        <h3>Player 2</h3>
                        <p>{this.state.player2} win</p>
                    </div>  
                    
                </div>
                <div className="container">
                    {
                        this.state.colors.map(item => 
                            <Shape shape={!this.state.active ? item.shape : "square"} 
                                color={!this.state.active ?  item.color : "white"} 
                                style={!this.state.active? {} : {border:"1px solid black"}} 
                                question={this.state.question} time={this.state.time} 
                                key={item.color} 
                                keyColor={item.color}
                                host={this.state.host}
                            />
                        )
                    }
                </div>
                
                <button onClick={this.onClickStart}>Start</button>

            </div>

        )
        
    }

    NRound = 5;

    onClickStart(){
        this.setState({
            active: false,
            host:true,
            time: 5,
            colors: [],
        }, function(){
            this.countDown();
            this.setState({
            colors: this.randomColor(4)
        })
        })
        

    }
    

    randomColor = (n) => {
        
        
        let colorArr = [];
        for(let i = 0; i < n; i++){
            let color = dataColor[Math.floor(Math.random()*dataColor.length)];
            // let shape = dataShape[Math.floor(Math.random()*dataShape.length)]
            
            let found= false;
            for(let i = 0; i<colorArr.length; i++){
                if(colorArr[i].color===color){
                    found = true
                }
            }
            if(found!== false){
                i--;
            }
            else{
                colorArr.push({color:color, shape:'square'});
                // colorArr.push({color:color, shape:shape})
            }
            
        }
        
        let question = colorArr[Math.floor(Math.random()*4)].color;
        this.setState({
            question: question
        })

        const db = fire.firestore();
        db.collection("rooms").doc("3dGkXKxwc7WYy5rA1b1s").set({
            colors: colorArr,
            question: question,
            time: 5,
            active: false
        }, { merge: true })
        .then(function() {
            
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        
        return colorArr;
    }

    countDown = () => {
        const db = fire.firestore();
        if(this.state.round >= 0){
            // this.setSate({
            //     round: this.state.round -1
            // })
            let countDownTime = 10;
            let component = this;

            var x = setInterval(function() {
                countDownTime-=1;
                


            
            if(component.state.time !== 0){
                db.collection("rooms").doc("3dGkXKxwc7WYy5rA1b1s").set({
                    time: component.state.time-1
        
                }, { merge: true })
                .then(function() {
                    console.log("Document successfully written!");
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });
        
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
        
    }

    componentDidMount(){
        const component = this;
        const db = firestore();

        db.collection("rooms").doc("3dGkXKxwc7WYy5rA1b1s")
        .onSnapshot(function(doc) {
            component.setState({
                colors: doc.data().colors,
                time: doc.data().time,
                active: doc.data().active,
                question: doc.data().question,
                player1: doc.data().users[0].point,
                player2: doc.data().users[1].point,
                roomName: doc.data().name,
                round: doc.data().round,
                
            })
            if(doc.data().round===0){
                if(doc.data().users[0].point>doc.data().users[1].point){
                    alert("Player1 win")
                }
                if(doc.data().users[0].point<doc.data().users[1].point){
                    alert("Player2 win")
                }
                if(doc.data().users[0].point===doc.data().users[1].point){
                    alert("Tie")
                }
            }
        });
        
        
    }

    
        
}