import React, { Component } from 'react';
import "../css/shape.css";


import fire from "../FireBase";
import { firestore } from 'firebase';


export default class Shape extends Component {
    constructor(props){
        super(props);
        this.state = {
            round: 1,
            player1: 10,
            player2: 10
        }
        this.onSubmitAnswer = this.onSubmitAnswer.bind(this);
    }
    
    render(){
        const { shape, color } = this.props; 

        if(shape==="triangle"){
            return(
                <div className={shape} style={{borderBottom: "120px solid", borderBottomColor: color}}>
                </div>
            )
        }
        else{
            return(
                <div className={shape} style={{backgroundColor: color,...this.props.style}} onClick={this.onSubmitAnswer}>
                </div>
    
            )
        }
       
    }

    onSubmitAnswer(){
        const component =this
        const db = fire.firestore();
        let player1Score;
        let player2Score;
        db.collection("rooms").doc("3dGkXKxwc7WYy5rA1b1s").get().then(function(doc) {
            if (doc.exists) {

                    player1Score = doc.data().users[0]
                    player2Score = doc.data().users[1]
                    // console.log(player1Score.point);
                    if(component.props.time===0){
                        if(component.props.question===component.props.keyColor){
                            if(component.props.host===true){
                                player1Score.point+=10;
                            }
                            else{
                                player2Score.point+=10;
                            }
                            db.collection("rooms").doc("3dGkXKxwc7WYy5rA1b1s").set({
                                users: [
                                    player1Score,
                                    player2Score
                                ]
                                
                            }, { merge: true })
                            .then(function() {
                                console.log("Document successfully written!");
                            })
                            .catch(function(error) {
                                console.error("Error writing document: ", error);
                            });
                        }
                    }

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

        
        
    }
        
}