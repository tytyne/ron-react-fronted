import React from 'react'
import "./home.css"
import avatar from "../../../assets/pictures/avatar.png"

export default function HomeHeader() {
    return (
        <div>
             <div className="main__title">
            <img src={avatar} alt="" />
            <div className="main__greeting">
              <h1>Hello Florentine</h1>
              <p>Welcome to your admin dashboard</p>
            </div>
          </div>
        </div>
    )
}

