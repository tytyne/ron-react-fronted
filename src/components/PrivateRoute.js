import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import UserService from "../services/user.service.js"

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = UserService.currentUserValue;
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/unauthorised', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)