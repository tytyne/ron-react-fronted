import React,{useState,useEffect} from "react";
import StatService from "../../../services/stats.service"
import "./home.css";
const Stats = () => {

    const[users,setUsers]=useState("")
    const [broadcasts,setbroadcasts]=useState("")
    const[lga,setLga]=useState("")
    const [discussions,setDiscussions]=useState("")

   
    React.useEffect(()=>{
        StatService.allStats().then(res=>{
            setUsers(res.users[0][""])
            setbroadcasts(res.broadcasts[0][""])
            setLga(res.lga[0][""])
            setDiscussions(res.discussions[0][""])
        })
    })

  return (
    <>
      <div className="charts__right__cards">
        <div className="card1">
          <h1>Users</h1>
          <p>{users}</p>
        </div>

        <div className="card2">
          <h1>Broadcast posts</h1>
          <p>{broadcasts}</p>
        </div>

        <div className="card3">
          <h1>LGA</h1>
          <p>{lga}</p>
        </div>

        <div className="card4">
          <h1>DSPs</h1>
          <p>{discussions}</p>
        </div>
      </div>
    </>
  );
};

export default Stats;
