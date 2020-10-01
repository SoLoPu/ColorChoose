import React, { Component } from 'react';
import fire from "../../FireBase"
import {
    useHistory
} from "react-router-dom";
import { queries } from '@testing-library/react';


export default function RoomComponent(props) {
    const history = useHistory();
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
    return (
        <div className="room-component" onClick={() => moveToRoom()}>
            {props.room.name}
        </div>
    )
}