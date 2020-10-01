import React, { Component } from 'react';



export default class Start extends Component {
    render(){
        return(
            <div className="about-wrapper">
                <h1>Funny Color</h1>
                <form action="POST">
                   <input type="text" placeholder="User name" />
                   <input type="submit" value="Submit"/>
                </form>
            </div>

        )
    }
        
}