import React, { useState } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "../components/Login";
import Forgot from "../components/Forgot";
import Reset from  "../components/Reset";
import Dashboard from  "../components/Dashboard";
import Users from "../components/Users"


const AppRouter = () => {
//  const [token, setToken] = useState();

//   if(!token) {
//     return <Login setToken={setToken} />
//   }

  return (
    <BrowserRouter>
      <div>
       
        <div className="main-content">
            <Switch>
              <Route component={Login} path="/" exact={true} />
              <Route component={Forgot} path="/forgot_password" />
              <Route component={Reset} path="/reset_password" />
              <Route component ={Dashboard} path="/dashboard"/>
              <Route component ={Users}  path="/users"/>
            </Switch>
       
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;