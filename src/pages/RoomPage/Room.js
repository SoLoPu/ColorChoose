import React, { Component, useEffect, useState } from 'react';
import RoomComponent from "./RoomCoponent"
import fire from "../../FireBase"

export default function Room(props) {
    const [listRoom, setListRoom] = useState([])
    useEffect(() => {
        const db = fire.firestore();
<<<<<<< HEAD
        db.collection("rooms").get().then(function(doc) {
            console.log(doc)
            let DataRooms = []
            doc.forEach(e => DataRooms.push(e.data()))
            setListRoom(DataRooms)
        })
        
    }, [])
    return ( 
        <div className = "Room-container" > {
=======
        db.collection("rooms")
            .onSnapshot(function (doc) {
                const listRoom = []
                doc.forEach(item => {
                    listRoom.push(item.data())
                })
                setListRoom(listRoom)
            });
    }, [])
    return (
        <div className="Room-container" > {
>>>>>>> 4a3a5ada66e615e0c7df1e4922be9d6c8e79e02a
            listRoom.map((item, index) => {
                return <RoomComponent room={item}
                />
            })
<<<<<<< HEAD
        } 
        </div>
=======
        } </div>
>>>>>>> 4a3a5ada66e615e0c7df1e4922be9d6c8e79e02a
    )
}