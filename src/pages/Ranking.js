import React, {Component} from 'react';
import "../css/ranking.css"
import User from "./User"

function Ranking(props){
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

export default Ranking