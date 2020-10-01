import React, { Component, useState } from 'react';
import "../css/start.css";
import Coockies from "js-cookie"
import fire from "../FireBase"
import {
    useHistory
} from "react-router-dom";


export default function Start() {
    const [username, setUsername] = useState("")
    const history = useHistory()
    const submitUser = () => {
        const db = fire.firestore();
        console.log(username)
        if (username !== "")
            db.collection("users").add({
                username: username,
                point: 0
            }).then(function (doc) {
                console.log(username)
                if (username !== "") {
                    localStorage.setItem("user", JSON.stringify({
                        username: username,
                        id: doc.id
                    }))
                    history.push("/room")
                }
            })
    }
    return (
        <div className="body">
            <h2 className="game-name">Color Remember</h2>
            <div class="form__group field">
                <input type="input" class="form__field" onChange={(e) => {
                    console.log(e.target.value)
                    setUsername(e.target.value)
                }} placeholder="Name" name="name" id='name' required />
                <label for="name" class="form__label">Username</label>
                <button type="submit" className="submit" onClick={() => submitUser()}>Submit</button>
            </div>
        </div>

    )

}