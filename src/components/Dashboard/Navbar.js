import React from 'react';
import{ FaCaretDown} from "react-icons/fa"
import "./navbar.css";
function Navbar() {
  

  return (
    <>

       <nav class="navbar">
        
        <div class="nav_icon" onclick="toggleSidebar()">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div class="navbar__left">
          <div class="navbar">
            <div class="dropdown">
              <button class="dropbtn">People 
                <FaCaretDown/>
              </button>
              <div class="dropdown-content">
                <a href="/users">Users</a>
                <a href="/admins">Admins</a>
                {/* <a href="/speakers">speakers</a> */}
              </div>
            </div> 
            
            <div class="dropdown">
              <button class="dropbtn">posts 
              <FaCaretDown/>
              </button>
              <div class="dropdown-content">
                <a href="#">Discussion space Post</a>
                <a href="#">newFeed Post</a>
                <a href="/broadcasts">Broadcast Post</a>
              </div>
            </div> 
            <a href="">Nomination</a>
            <div class="dropdown">
              <button class="dropbtn">Events 
              <FaCaretDown/>
              </button>
              <div class="dropdown-content">
                <a href="/general/events">General Event</a>
                <a href="#">ETownhall Event</a>
                <a href="#">Attendance</a>
              </div>
            </div>
            <a href="#home">LeaderBoard</a>
           
            <div class="dropdown">
              <button class="dropbtn">Documents
              <FaCaretDown/>
              </button>
              <div class="dropdown-content">
                <a href="#">Discussion space Files</a>
      
              </div>
            </div> 
             
           
            <div class="dropdown">
              <button class="dropbtn">Donations
              <FaCaretDown/>
              </button>
              <div class="dropdown-content">
                <a href="/donations">Donations</a>
                <a href="#">Donation Transactions</a>
                <a href="#">Payment</a> 
               
              </div>
            </div> 
          
          
          </div>
        </div>
        {/* <div class="navbar__right">
        
         
          <div class="dropdown">
            <img width="30" src="./assets/avatar.png" alt="" >
              <i class="fa fa-caret-down"></i>
          </img>
            <div class="dropdown-content">
              <a href="#">Logout</a>
             
             
            </div>
          </div> 

        </div> */}
      </nav>
                  
      
            
    </>
  );
}

export default Navbar;
