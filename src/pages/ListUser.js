import React, { useEffect, useState } from 'react'
import fire from '../FireBase';

export default function ListUser(props) {
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
}