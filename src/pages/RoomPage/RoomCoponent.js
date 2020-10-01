import React, { Component, useState, useEffect } from 'react';
import fire from "../../FireBase"
import {
    useHistory
} from "react-router-dom";
import { queries } from '@testing-library/react';


export default function RoomComponent(props) {
    const history = useHistory();
    const [player1, setPlayer1] = useState("Waiting");
    const [player2, setPlayer2] = useState("Waiting");
    const moveToRoom = () => {
        // history.push("/gameplay");
        if (props.room.users.length >= 2)
            return
        const db = fire.firestore();
        db.collection("rooms").doc(props.room.idRoom.toString()).get().then(function (doc) {
            console.log(doc.data())
            const dataRoom = doc.data()
            const user = JSON.parse(localStorage.getItem("user"))
            console.log(user)
            db.collection('rooms').doc(props.room.idRoom.toString()).update({
                users: [...dataRoom.users, {
                    username: user.username,
                    id: user.id,
                    point: 0,
                    isReady: false,
                }]
            })
            history.push("/gameplay" + `?room=${props.room.idRoom}`);
        })

        

    }

    useEffect(() => {
        const db = fire.firestore();
        db.collection("rooms").doc(props.room.idRoom)
            .onSnapshot(function (doc) {
                if(doc.data().users.length === 1){
                    setPlayer1(doc.data().users[0].username);
                }
                if(doc.data().users.length === 2){
                    setPlayer1(doc.data().users[0].username);
                    setPlayer2(doc.data().users[1].username);
                }
            });
    }, [])
    return (
        <div className="room-component" onClick={() => moveToRoom()}>
            <p>{props.room.name}</p>
            <div className="room-component-users">
                <p>{player1}</p>
                <p>{player2}</p>
            </div>
            
        </div>
    )

   
}