
import React, { useEffect, useState } from 'react'
import fire from '../FireBase';
import "../css/ranking.css"
import User from "./User"

export default function Ranking(props) {
    // const [users, setUsers] = useState([])
    // const [ids, setIds] = useState([])
    useEffect(() => {
        const db = fire.firestore()

        // saveRank()
        getRank()

    }, [])

    function saveRank() {
        const db = fire.firestore()
        let users = [
            {
                id: 1,
                point: 10,
                username: 'tr'
            },
            {
                id: 2,
                point: 20,
                username: 'tr'
            }
        ]
        for(let i = 0; i < users.length; i++) {
            db.collection("ranking").doc(users[i].id.toString()).set({
                username: users[i].username,
                point: users[i].point,
            })
            .then(function() {
                console.log("Successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        }
    } 

    function getRank() {
        const db = fire.firestore()
        
        db.collection("ranking").onSnapshot(function(doc) {
            let listRank = []
            doc.forEach(e => listRank.push(e.data()))
            console.log(listRank)
            
        })
    }

    return (
        <div className="ranking">
            <h2>Ranking</h2>
            <ol>
                <li id="top1"><User point={props.users[0].point} name={props.users[0].name} /></li>
                <li id="top2"><User point={props.users[1].point} name={props.users[1].name} /></li>
                <li id="top3"><User point={props.users[2].point} name={props.users[2].name} /></li>
                {props.users.slice(3).map(u => <li><User point={u.point} name={u.name}/></li>)}
            </ol>
        </div>
    )
}

