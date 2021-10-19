import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("user");
//   const status = localStorage.getItem("user");
//   console.log("check status===",status)
//   const user =JSON.parse (isAuthenticated)?.token

//   if (user) {
//     const decodedJwt = parseJwt(user.accessToken);

//     if (decodedJwt.exp * 1000 < Date.now()) {
//       props.logOut();
//     }
//   }
//   console.log("==entire tokent from local storage====>", isAuthenticated);
//   console.log("===tokent from local storage====>",JSON.parse (isAuthenticated)?.token);
  let token = JSON.parse (isAuthenticated)?.token !==null ? JSON.parse (isAuthenticated)?.token:''
// console.log('===token from ls====>',  typeof token)

/**
 * Create a status variable
 * Send a GET request to backend
 * Check response status
 * Initialize status variable to the response status
 * If status doesn't equal to 401 load component
 * Else delete token in local storage and redirect to login 
 */
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
