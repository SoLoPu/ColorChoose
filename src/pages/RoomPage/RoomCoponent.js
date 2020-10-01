import React, { Component } from 'react';



export default function RoomComponent(props) {
    console.log(props)
    return (
        <div className="room-component">
            {props.room.name}
        </div>
    )
}