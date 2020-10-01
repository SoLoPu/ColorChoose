import React, { Component, useEffect, useState } from 'react';
import RoomComponent from "./RoomCoponent"
import fire from "../../FireBase"
import 'firebase/firestore';

export default function Room(props) {
    const dataListRoom = [
        { name: "Ha Noi" },
        { name: "Hai Phong" },
        { name: "Da Nang" },
        { name: "Quy Nhon" },
        { name: "Nha Trang" },
        { name: "Phan Thiet" },
        { name: "Ho Chi Minh" },
    ]
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