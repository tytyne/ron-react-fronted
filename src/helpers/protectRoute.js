import React from "react";
import { Redirect, Route } from "react-router-dom";
import jwtDecode, { JwtPayload } from "jwt-decode";
import authService from '../services/auth.service'

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("user");

  let tokenUser = JSON.parse (isAuthenticated)?.token

  //time of expiration
  const {exp} = jwtDecode(tokenUser)
  
  //remove one minute
  const expirationTime = (exp * 1000) - 60000

  if (Date.now() >= expirationTime) {
    authService.logout()
    window.location.href="/"
   
   
     // set LocalStorage here based on response;
  }


  let token = JSON.parse (isAuthenticated)?.token !==null ? JSON.parse (isAuthenticated)?.token:''

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        token && typeof token !=='undefined' && token!=='' ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRoute;
