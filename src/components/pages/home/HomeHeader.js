import React,{useState,useEffect} from 'react'
import "./home.css"
import avatar from "../../../assets/pictures/avatar.png"
import AdminService from "../../../services/admin.service"

export default function HomeHeader() {
  const[admin,setAdmin]=useState([])
  useEffect(()=>{
    AdminService.getAdminMe().then(res=>{
      console.log("check admin info",res.data)
      setAdmin(res.data[0])
    })
  },[])
    return (
        <div>
             <div className="main__title">
            <img src={avatar} alt="" />
            <div className="main__greeting">
              <h1> hello {admin.FirstName}  {admin.LastName}</h1>
              <p>Welcome to your admin dashboard</p>
            </div>
          </div>
        </div>
    )
}

