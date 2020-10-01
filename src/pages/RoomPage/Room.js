import React, { Component } from 'react';
import RoomComponent from "./RoomCoponent"

export default function Room(props) {
    const dataListRoom = [
        { name: "room1" },
        { name: "room2" },
        { name: "room3" },
        { name: "room4" },
        { name: "room5" },
        { name: "room6" },
        { name: "room7" },
    ]
    return (
        <div className="Room-container">
            {dataListRoom.map((item, index) => {
                return <RoomComponent room={item} />
            })}
        </div>
    )
}