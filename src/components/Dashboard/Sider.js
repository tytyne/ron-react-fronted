import React from 'react';
import "./sidebar.css"
import authService from '../../services/auth.service';
import DesignIcons from "./icons"




const logOut = () => {
  authService.logout();
};
const Sider = () => {
    return (
        <div id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            <img src="https://test.RiseoNigeria.com:8006/assets/images/logo.png" />
            <h1>RiseoNigeria</h1>
          </div>
          <i
            onclick="closeSidebar()"
            className="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          ></i>
        </div>

        <div className="sidebar__menu">
          <div className="sidebar__link active_menu_link">
         
            <a href="#"> <DesignIcons.Home />Dashboard</a>
          </div>
        
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/wards"><DesignIcons.Building/>Ward</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/states"><DesignIcons.cirle/>States</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-calendar"></i>
            <a href="/federals"><DesignIcons.Bell/>Federal Constituency</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/senatorials"><DesignIcons.Tractor/>Senatorial District</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/nominationsCat"><DesignIcons.Calendar/>Nomination category</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/statehouse"><DesignIcons.Calendar/>State House Constituency</a>
          </div>
          
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/lga"><DesignIcons.Calendar/>LGA</a>
          </div>
         
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/gateway"><DesignIcons.Calendar/>Gateway</a>
          </div>
          {/* <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="#"><DesignIcons.Calendar/>General Config</a>
          </div> */}
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/countries"><DesignIcons.Calendar/>Country</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/broadcastType"><DesignIcons.Calendar/>Broadcast Type</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/discussionSpaceOwner"><DesignIcons.Calendar/>Discussion Space Owner</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/elected"><DesignIcons.Calendar/>Elected position</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-archive"></i>
            <a href="/discussionSpaces"><DesignIcons.Calendar/>Discussion Spaces</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/eventHost"><DesignIcons.Calendar/>Event Host Type</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/eventCategory"><DesignIcons.Calendar/>Event Category</a>
          </div>
          {/* <div className="sidebar__link">
            <i className="fa fa-video-camera"></i>
            <a href="#"><DesignIcons.Calendar/>RegEx Type</a>
          </div> */}
          <div className="sidebar__link">
            <i className="fa fa-video-camera"></i>
            <a href="/notificationType"><DesignIcons.Bell/>Notification Type</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-video-camera"></i>
            <a href="#"><DesignIcons.Calendar/>Donation Types</a>
          </div>
          <div className="sidebar__logout">
            {/* <i className="fa fa-power-off"></i> */}
            <a href="/" onClick={()=>logOut()}><DesignIcons.PowerOff/>Log out</a>
          </div>
        </div>
      </div>
      );
}
 
export default Sider;

