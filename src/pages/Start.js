import React, { Component } from 'react';
import "../css/start.css";


export default class Start extends Component {
    render(){
        return(
            <div className="body">
                <h1 className="game-name">Color Remember</h1>
                <div class="form__group field">
                    <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                    <label for="name" class="form__label">Username</label>
                    <button type="submit" className="submit">Submit</button>
                </div>
            </div>
            
        )
    }
        
}