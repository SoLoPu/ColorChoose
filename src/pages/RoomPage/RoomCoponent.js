import React, { Component } from 'react';
import fire from "../../FireBase"
import {
    useHistory
} from "react-router-dom";


export default function RoomComponent(props) {
    console.log(props)
    const history = useHistory();
    const moveToRoom = () => {
        // history.push("/gameplay");
        if (props.room.users.length >= 2)
            return
        const db = fire.firestore();
        db.collection("rooms").doc(props.room.idRoom.toString()).get().then(function (doc) {
            console.log(doc.data())
            const dataRoom = doc.data()
            const user = localStorage.getItem("user")
            console.log(JSON.parse(user))
            db.collection('rooms').doc(props.room.idRoom.toString()).update({
                users: [...dataRoom.users]
            })
            history.push("/gameplay");
        })
    }
    return (
        <div className="room-component" onClick={() => moveToRoom()}>
            {props.room.name}
        </div>
    )
}