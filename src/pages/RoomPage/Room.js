import React, { Component, useEffect, useState } from 'react';
import RoomComponent from "./RoomCoponent"
import fire from "../../FireBase"

export default function Room(props) {
    const [listRoom, setListRoom] = useState([])
    useEffect(() => {
        const db = fire.firestore();
        db.collection("rooms").get().then(function (doc) {
            let DataRooms = []
            doc.forEach(e => DataRooms.push(e.data()))
            setListRoom(DataRooms)
        })
    }, [])
    return (
        <div className="Room-container">
            {listRoom.map((item, index) => {
                return <RoomComponent room={item} />
            })}
        </div>
    )
}