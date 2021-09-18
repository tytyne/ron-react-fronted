import React from 'react';
// import 'font-awesome/css/font-awesome.min.css';
import avatar from "../../../assets/pictures/avatar.png"
import HomeHeader from './HomeHeader';
import DesignIcons from "../../Dashboard/icons"
import "./home.css"
const MainContent = () => {
  return ( 
    <>
          <HomeHeader/>

          <div className="main__cards">
            <div className="card">
              <DesignIcons.UserColor/>
              {/* <i
                className="fa fa-user-circle-o fa-2x text-lightblue"
                aria-hidden="true"
              ></i> */}
              <div className="card_inner">
                <p className="text-primary-p">Number of Subscribers</p>
                <span className="font-bold text-title">578</span>
              </div>
            </div>

            <div className="card">
            <DesignIcons.CalendarColor/>
              {/* <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i> */}
              <div className="card_inner">
                <p className="text-primary-p">Number of Events</p>
                <span className="font-bold text-title">2467</span>
              </div>
            </div>

            <div className="card">
            <DesignIcons.VideoColor/>
              {/* <i
                className="fa fa-video-camera fa-2x text-yellow"
                aria-hidden="true"
              ></i> */}
              <div className="card_inner">
                <p className="text-primary-p">Number of Broadcast posts</p>
                <span className="font-bold text-title">340</span>
              </div>
            </div>

            <div className="card">
            <DesignIcons.BuildingColor/>
              {/* <i
                className="fa fa-building-o fa-2x text-green"
                aria-hidden="true"
              ></i> */}
              <div className="card_inner">
                <p className="text-primary-p">Number of LGA</p>
                <span className="font-bold text-title">35</span>
              </div>
            </div>
          </div>
       
          <div className="charts">
            <div className="charts__left">
              <div className="charts__left__title">
                <div>
                  <h1>Daily Reports</h1>
               
                </div>
                <DesignIcons.UserColor/>
                {/* <i className="fa fa-user-circle-o" aria-hidden="true"></i> */}
              </div>
              <div id="chart"></div>
            </div>

            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h1>Stats Reports</h1>
                  <p>numbers,status</p>
                </div>
                {/* <i className="fa fa-files-o" aria-hidden="true"></i> */}
                <DesignIcons.User/>
              </div>

              <div className="charts__right__cards">
                <div className="card1">
                  <h1>Users</h1>
                  <p>892</p>
                </div>

                <div className="card2">
                  <h1>Broadcast posts</h1>
                  <p>32</p>
                </div>

                <div className="card3">
                  <h1>LGA</h1>
                  <p>89</p>
                </div>

                <div className="card4">
                  <h1>DSPs</h1>
                  <p>18</p>
                </div>
              </div>
            </div>
          </div>
      
          <div className="charts">
            <div className="charts__left">
              <div className="charts__left__title">
                <div>
                  <h1>Posts Reports</h1>
                  <p>Names,comments,likes</p>
                </div>
                {/* <i className="fa fa-user-circle-o" aria-hidden="true"></i> */}
                <DesignIcons.User/>
              </div>
            
                        
            <table>
              <tr>
                <th>Title</th>
                
                <th>postedBy</th>
                <th>Comments</th>
                <th>likes</th>
              </tr>
              <tr>
                <td>Nigerian Population</td>
                <td>Florentine</td>
                <td>34</td>
                <td>23</td>
              </tr>
              <tr>
                <td>Nigerian Population</td>
                <td>Florentine</td>
                <td>34</td>
                <td>23</td>
              </tr>
            </table>

        
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