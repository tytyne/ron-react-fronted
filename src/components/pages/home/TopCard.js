
import React,{useState,useEffect} from "react";
import DesignIcons from "../../Dashboard/icons"
import StatService from "../../../services/stats.service"
import "./home.css";
const TopCard = () => {

    const[users,setUsers]=useState("")
    const [broadcasts,setbroadcasts]=useState("")
    const[lga,setLga]=useState("")
    const [events,setEvents]=useState("")

   
    React.useEffect(()=>{
        StatService.allStats().then(res=>{
            setUsers(res.users[0][""])
            setbroadcasts(res.broadcasts[0][""])
            setLga(res.lga[0][""])
            setEvents(res.events[0][""])
        })
    })

  return (
    <>
      <div className="main__cards">
        <div className="card">
          <DesignIcons.UserColor />
          <div className="card_inner">
            <p className="text-primary-p">Number of Subscribers</p>
            <span className="font-bold text-title">{users}</span>
          </div>
        </div>

        <div className="card">
          <DesignIcons.CalendarColor />
          <div className="card_inner">
            <p className="text-primary-p">Number of Events</p>
            <span className="font-bold text-title">{events}</span>
          </div>
        </div>

        <div className="card">
          <DesignIcons.VideoColor />
          <div className="card_inner">
            <p className="text-primary-p">Number of Broadcast posts</p>
            <span className="font-bold text-title">{broadcasts}</span>
          </div>
        </div>

        <div className="card">
          <DesignIcons.BuildingColor />
          <div className="card_inner">
            <p className="text-primary-p">Number of LGA</p>
            <span className="font-bold text-title">{lga}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCard;
