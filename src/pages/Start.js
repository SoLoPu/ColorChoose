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
                    <br/>
                    <button className="submit"><a data-c-tooltip="Luật chơi: Người chơi sẽ đăng ký tên và vào phòng chơi, mỗi phòng sẽ có 2 người chơi. Nhiệm vụ của người chơi là sẽ ghi nhớ tất cả vị trí của các màu trong khoảng thời gian quy định, hết thời gian ghi nhớ các thẻ sẽ được úp lại, ai là người đoán đúng và nhanh nhất sẽ là người thắng của round đó. Mỗi lần chơi sẽ trải qua 5 round, ứng với mỗi round thắng thì người thắng sẽ được cộng 10 điểm, người thua sẽ không được cộng điểm. Kết thúc một ván đấu thì điểm của mỗi người sẽ được cộng vào điểm tổng của mỗi người chơi từ đó xếp hạng điểm cho tất cả người chơi." tooltip-position ="left">Rule</a></button>
            </div>
        </div>

    )

}