import React from 'react'

function User(props){
    return(
        <div className="user">
            <span>{props.rank}: {props.name}</span>
        </div>
    )
}

export default User;