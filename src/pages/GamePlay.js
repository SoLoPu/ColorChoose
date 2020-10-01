import React, { Component, useEffect, useState } from 'react';
import "../css/gameplay.css";
import Shape from "../component/Shape";
import dataColor from "../data/dataColor"
import dataShape from "../data/dataShape"
import fire from "../FireBase"

const randomColor = (n) => {
    let colorArr = [];
    let randIdx = Math.floor(Math.random() * (dataColor.length - n))

    for (let i = randIdx; i < randIdx + n; i++) {
        let shape = Math.floor(Math.random() * dataShape)
        colorArr.push({ color: dataColor[i], shape: "square" })
    }
    return colorArr;
}

function UserInfo(props) {
    const [roomData, setRoomData] = useState({})
    console.log(window.location.search.substring(6))
    const db = fire.firestore();
    console.log(props)
    useEffect(() => {
        db.collection("rooms").doc(window.location.search.substring(6)).onSnapshot(function (doc) {
            // setRoomData(doc.data())
            setRoomData(doc.data())
            if (doc.data().users.length > 1) {
                for (let i in doc.data().users) {
                    if (!doc.data().users[i].isReady) {
                        return
                    }
                }
                // countDown()
                props.countDown()
            }
        });
    }, [])
    useEffect(() => {
        let path = window.location.search.substring(6)
        console.log(window.location.search.substring(6));
        return function () {

            db.collection("rooms").doc(path).get().then(function (doc) {
                // setRoomData(doc.data())
                let roomData = doc.data()
                const user = JSON.parse(localStorage.getItem("user"))
                db.collection("rooms").doc(path).update({
                    users: roomData.users.splice(roomData.users.indexOf(item => item.id === user.id))
                })
                console.log(roomData.users.splice(roomData.users.indexOf(item => item.id === user.id)))
            })
        }
    }, [])
    return (
        <div className="score">
            <div className="player">
                <h3>{!!roomData.users && roomData?.users[0]?.username}</h3>
                {/* <p>{this.state.player2} win</p> */}
            </div>
            <div className="player">
                <h3>{!!roomData.users ? !!roomData.users[1] ? roomData?.users[1]?.username : "Waiting ..." : ""}</h3>
                {/* <p>{this.state.player2} win</p> */}
            </div>
        </div>
    )
}
function RoomName() {
    const [roomData, setRoomData] = useState({})
    console.log(window.location.search.substring(6))
    const db = fire.firestore();
    useEffect(() => {
        db.collection("rooms").doc(window.location.search.substring(6)).onSnapshot(function (doc) {
            // setRoomData(doc.data())
            setRoomData(doc.data())
        });
    }, [])
    return (
        <h1>{roomData.name}</h1>
    )
}


export default class GamePlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            round: 1,
            time: 5,
            player1: 0,
            player2: 0,
            active: false,
            colors: [
                "red",
                "blue",
                "yellow",
                "black"
            ],
            numOfShape: 4,
            shapes: [
            ],
            dataRoom: {},
        }
    }
    async componentDidMount() {
        window.location.search.substring(6)
        // this.countDown();
        this.setState({
            colors: randomColor(4)
        })
        console.log("CCCC")
    }
    render() {
        const countDown = () => {
            let component = this;
            // Set the date we're counting down to
            // Update the count down every 1 second
            var x = setInterval(function () {
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
                        active: true
                    })
                    clearInterval(x);
                }
            }, 1000);
        }
        console.log(this.state.dataRoom)
        return (
            <div className="about-wrapper">
                <RoomName />
                <p className="count-down">{this.state.time}</p>
                {this.state.active &&
                    <div className="result" style={{ backgroundColor: this.state.colors[Math.floor(Math.random() * this.state.numOfShape)].color }}></div>}
                {/* <div className="score">

                    <div className="player">
                        <h3>Player 1</h3>
                        <p>{this.state.player2} win</p>
                    </div>
                    <div className="player">
                        <h3>Player 2</h3>
                        <p>{this.state.player2} win</p>
                    </div>

                </div> */}
                <UserInfo countDown={() => countDown()} />
                <div className="container">
                    {
                        this.state.colors.map(item =>
                            <Shape shape={!this.state.active ? item.shape : "square"} color={!this.state.active ? item.color : "white"} style={!this.state.active ? {} : { border: "1px solid black" }} key={item.color} />
                        )
                    }
                </div>

            </div>

        )

    }
}