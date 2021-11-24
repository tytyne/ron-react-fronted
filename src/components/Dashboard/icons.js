import React from 'react';
import "./sidebar.css"
import authService from '../../services/auth.service';
import {FaHome,FaBuilding,FaWineGlass,FaRegCommentAlt,FaMoneyBill,FaNewspaper,FaXRay,
  FaBookmark,FaCalendar,FaBell,FaCircle,FaBullhorn,FaCheck,FaEnvelope,FaFileSignature,
  FaTractor,FaTrain,FaSquare,FaPowerOff,FaDesktop,FaRegMap,FaRegPaperPlane,FaRegSnowflake,
  FaUser,FaUserCircle, FaVideo,FaRegSun,FaRegBuilding} from "react-icons/fa"
import { IconContext } from "react-icons";
import styled from "styled-components";


const Home  = styled(FaHome)`
  padding-right:2%;
 
`;

const Water  = styled(FaRegSun)`
  padding-right:2%;
 
`;
const Buildingg  = styled(FaRegBuilding)`
  padding-right:2%;
 
`;
const RegPaperPlane  = styled(FaRegPaperPlane)`
  padding-right:2%;
 
`;

const RegSnowflake  = styled(FaRegSnowflake)`
  padding-right:2%;
 
`;
const RegMap  = styled(FaRegMap)`
  padding-right:2%;
 
`;
const Desktop  = styled(FaDesktop)`
  padding-right:2%;
 
`;

const FileSignature  = styled(FaFileSignature)`
  padding-right:2%;
 
`;
const Envelope  = styled(FaEnvelope)`
  padding-right:2%;
 
`;
const RegCommentAlt  = styled(FaRegCommentAlt)`
  padding-right:2%;
 
`;
const Check  = styled(FaCheck)`
  padding-right:2%;
 
`;
const Bullhorn  = styled(FaBullhorn)`
  padding-right:2%;
 
`;
const MoneyBill  = styled(FaMoneyBill)`
  padding-right:2%;
 
`;

const XRay  = styled(FaXRay)`
  padding-right:2%;
 
`;

const Newspaper  = styled(FaNewspaper)`
  padding-right:2%;
 
`;
const Building  = styled(FaBuilding)`
  padding-right:2%;
 
`;
const WineGlass  = styled(FaWineGlass)`
  padding-right:2%;
 
`;
const Bookmark  = styled(FaBookmark)`
  padding-right:2%;
 
`;
const Calendar  = styled(FaCalendar)`
  padding-right:2%;
 
`;
const Bell  = styled(FaBell)`
  padding-right:2%;
 
`;
const cirle  = styled(FaCircle)`
  padding-right:2%;
 
`;
const Tractor  = styled(FaTractor)`
  padding-right:2%;
 
`;
const Train  = styled(FaTrain)`
  padding-right:2%;
 
`;
const Square  = styled(FaSquare)`
  padding-right:2%;
 
`;
const PowerOff  = styled(FaPowerOff)`
  padding-right:2%;
 
`;
const User  = styled(FaUser)`
  padding-right:2%;
 
`;
const UserColor  = styled(FaUserCircle)`
  color:lightblue;
  transform: scale(2);
 
`;

const CalendarColor  = styled(FaCalendar)`
  color:red;
  transform:scale(2)
 
`;
const VideoColor  = styled(FaVideo)`
  color:yellow;
  transform:scale(2)
 
`;
const BuildingColor  = styled(FaBuilding)`
  color:green;
  transform:scale(2)
 
`;



export default{
    Home,Building,WineGlass,Bookmark,Envelope,RegSnowflake,
    Calendar,Bell,cirle,Tractor,Train,FileSignature,RegPaperPlane,
    Square,PowerOff,User,VideoColor,UserColor,Buildingg,
    CalendarColor,VideoColor,BuildingColor,MoneyBill,
    XRay,RegCommentAlt,Newspaper,Bullhorn,Check,Desktop,RegMap,Water
}

