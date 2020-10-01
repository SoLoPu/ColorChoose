import React from 'react'

function User(props){
    return(
        <div className="user">
            <span id={props.id}>{props.name}: {props.point}</span>
        </div>
    )
}

// class User extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             rank:0
//         }
//     }

//     render(){
//         return(
//             <div className="user">
//                 <span>{this.props.name}: {this.props.point}</span>
//             </div>
//         )
//     }

//     componentDidMount(){

//     }
// }

export default User;