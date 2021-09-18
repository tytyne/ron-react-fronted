import React from 'react';
import "./sidebar.css"
import authService from '../../services/auth.service';
import {FaHome,FaBuilding,FaWineGlass,FaBookmark,FaCalendar,FaBell,FaCircle,FaTractor,FaTrain,FaSquare,FaPowerOff,FaUser,FaUserCircle, FaVideo} from "react-icons/fa"
import { IconContext } from "react-icons";
import styled from "styled-components";


const Home  = styled(FaHome)`
  padding-right:2%;
 
`;
// const CaretDown  = styled(FaCaretDown)`
//   padding-right:2%;
 
// `;
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
    Home,Building,WineGlass,Bookmark,
    Calendar,Bell,cirle,Tractor,Train,
    Square,PowerOff,User,VideoColor,UserColor,
    CalendarColor,VideoColor,BuildingColor
}

