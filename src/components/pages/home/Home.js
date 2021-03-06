import React from 'react';
import HomeHeader from './HomeHeader';
import DesignIcons from "../../Dashboard/icons"
import Stats from "./stats"
import TopCard from "./TopCard"
import "./home.css"
import "./stylesheet.css";
import PostTemplate from "./PostReport"
import MapTemplate from "./Map"
const MainContent = () => {
  return ( 
    <>
          <HomeHeader/>
          <TopCard/>

          <div className="charts">
            <div className="charts__left">
              <div className="charts__left__title">
                  
                <div id="mapContainer">
                <p>users names, activities and locations</p>
                  <div id="mapClipPath">
                  <MapTemplate/>
                  </div>
                  </div>
                {/* <DesignIcons.UserColor/> */}
              </div>
              <div id="chart"></div>
            </div>

            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h1>Stats Reports</h1>
                  <p>numbers,status</p>
                </div>
                <DesignIcons.User/>
              </div>

              <Stats/>

            </div>
          </div>
      
          <div className="charts">
            <div className="charts__left">
              <div className="charts__left__title">
                <div>
                  <h1>FeedPosts Reports</h1>
                  <p>Names,comments,likes</p>
                </div>
                <DesignIcons.User/>
              </div>
            
              <PostTemplate/>         
           
        
            </div>

            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h1>Top Candidates List</h1>
                 
                </div>
              
              </div>
              <div>

                  <div className="profile-background">
                    <div className="profile">
                      <img src="./assets/user-profile.png" alt="nominee"/>
                    </div>
                  </div>
                  <div className="profile-name">
                    <h1>Arsene Chris</h1>
                  </div>
                  <div className="profile-description">
                    <p className="title">Chairman Candidate</p>
                  </div>
                  <div className="profile-number">
                    <p>Number 1 in nominees</p>
                  </div>
                  <div className="profile-voters">
                    <p>20 votes</p>
                  </div>
                 
                  <div className="profile-social-media">
                  <a href="#"><i className="fa fa-dribbble"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                </div>
              </div>
              
            </div>
          </div> 
      </> 

     );
}
 
export default MainContent;