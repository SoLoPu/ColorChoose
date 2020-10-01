import React, {Component} from 'react';
import "../css/ranking.css"
import User from "./User"

function Ranking(props){
    return (
        <div className="ranking">
            <h2>Ranking</h2>
            <div>
                {props.users.map(u => <User rank={u.rank} id={u.id} name={u.name}/>)}
            </div>
        </div>
    )
}

export default Ranking