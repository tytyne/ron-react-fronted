import React, { Children } from 'react';
import Navbar from "./components/Dashboard/Navbar"
import Sider from "./components/Dashboard/Sider"
import Footer from "./components/Dashboard/Footer"
import PageHeader from './components/Dashboard/pageHeader';
// import "./components/Dashboard/content.css"

const Appshell = ({children}) => {
    return (
        <> 
        <hr className="new5"></hr>
        <div className="container">
            <Navbar/>
           
           
      <main>
        <div class="main__container">
        {children}
        </div>
        <Footer/>
        </main>
            

        <Sider/>
            </div>
            </>
     );
}
 
export default Appshell;