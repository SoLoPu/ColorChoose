import React, { useEffect, useState } from 'react'
import "../css/ranking.css"
import User from "./User"
import fire from "../FireBase"


class Ranking extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
        this.getRank = this.getRank.bind(this)
    }

    getRank() {
        const db = fire.firestore()
        const save = this
        let rankingRef = db.collection("ranking");
        rankingRef.orderBy("createTime", "desc").orderBy("point").limit(10)
        db.collection("ranking").onSnapshot(function(doc) {
            let listRank = []
            doc.forEach(e => listRank.push(e.data()))
            console.log(listRank)
            save.setState(
                {data: listRank}
            )
        })
    }

    

    // getRank = () => {
    //     const db = fire.firestore()
    //     const save = this
    //     db.collection("ranking").onSnapshot(function(doc) {
    //         let listRank = []
    //         doc.forEach(e => listRank.push(e.data()))
    //         console.log(listRank)
    //         save.setState(
    //             {data: listRank}
    //         )  
    //     })
    // }

    render(){
        // if (this.state.data.length > 3){
            return (
            <div className="ranking">
                <h2>Ranking</h2>
                <ol>
                    {this.state.data.map(u => <li><User key={u.id} point={u.point} name={u.username}/></li>)}
                </ol>
            </div>
        )
        // else if(this.state.data.length === 1){
        //     return (
        //         <div className="ranking">
        //         <h2>Ranking</h2>
        //         <ol>
        //             <li id="top1"><User key={this.state.data[0].id} point={this.state.data[0].point} name={this.state.data[0].username}/></li>
        //         </ol>
        //     </div>
        //     )
        // }
        // else if(this.state.data.length === 2){
        //     return(
        //         <div className="ranking">
        //             <h2>Ranking</h2>
        //             <ol>
        //                 <li id="top1"><User key={this.state.data[0].id} point={this.state.data[0].point} name={this.state.data[0].username}/></li>
        //                 <li id="top2"><User key={this.state.data[1].id} point={this.state.data[1].point} name={this.state.data[1].username}/></li>
        //             </ol>
        //         </div>
        //     )
        // }
        // else if(this.state.data.length === 3) {
        //     return (
        //         <div className="ranking">
        //             <h2>Ranking</h2>
        //             <ol>
        //                 <li id="top1"><User key={this.state.data[0].id} point={this.state.data[0].point} name={this.state.data[0].username}/></li>
        //                 <li id="top2"><User key={this.state.data[1].id} point={this.state.data[1].point} name={this.state.data[1].username}/></li>
        //                 <li id="top3"><User key={this.state.data[2].id} point={this.state.data[2].point} name={this.state.data[2].username}/></li>
        //             </ol>
        //         </div>
        //     )
        // }
        
    }

    componentDidMount(){
        this.getRank()
    }
}

export default Ranking