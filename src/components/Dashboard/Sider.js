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
         
            <a href="/dashboard"> <DesignIcons.Home />Dashboard</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/about"><DesignIcons.Water/>About Us</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/wards"><DesignIcons.Buildingg/>Ward</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/states"><DesignIcons.RegPaperPlane/>States</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-calendar"></i>
            <a href="/federals"><DesignIcons.RegSnowflake/>Federal Constituency</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/senatorials"><DesignIcons.Tractor/>Senatorial District</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/nominationsCat"><DesignIcons.RegMap/>Nomination category</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/statehouse"><DesignIcons.Building/>State House Co</a>
          </div>
          
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/lga"><DesignIcons.XRay/>LGA</a>
          </div>
         
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/gateway"><DesignIcons.WineGlass/>Gateway</a>
          </div>
          {/* <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="#"><DesignIcons.Calendar/>General Config</a>
          </div> */}
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/countries"><DesignIcons.Train/>Country</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/broadcastType"><DesignIcons.Bullhorn/>Broadcast Type</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/discussionSpaceOwner"><DesignIcons.Desktop/>Discussion Space Owner</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/elected"><DesignIcons.Check/>Elected position</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-archive"></i>
            <a href="/discussionSpaces"><DesignIcons.Calendar/>Discussion Spaces</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/eventHost"><DesignIcons.FileSignature/>Event Host Type</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="/eventCategory"><DesignIcons.Envelope/>Event Category</a>
          </div>
          {/* <div className="sidebar__link">
            <i className="fa fa-video-camera"></i>
            <a href="#"><DesignIcons.Calendar/>RegEx Type</a>
          </div> */}
          <div className="sidebar__link">
            <i className="fa fa-video-camera"></i>
            <a href="/notificationType"><DesignIcons.Bell/>Notification Type</a>
          </div>
          {/* <div className="sidebar__link">
            <i className="fa fa-video-camera"></i>
            <a href="#"><DesignIcons.Calendar/>Donation Types</a>
          </div> */}
          <div className="sidebar__logout">
            {/* <i className="fa fa-power-off"></i> */}
            <a href="/" onClick={()=>logOut()}><DesignIcons.PowerOff/>Log out</a>
          </div>
        </div>
      </div>
      );
}
 
export default Sider;

