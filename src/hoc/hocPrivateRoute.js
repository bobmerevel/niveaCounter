/* eslint-disable no-unused-expressions */
import React from 'react';
import { Redirect, Route } from "react-router-dom"


const PrivateRoute = ({component: Component, ...rest}) => {
    const isAuth = localStorage.getItem('myPage.expectSignIn') == 1

    return (
        <Route {...rest} render={props => (
            isAuth
                ? <Component {...props} />
                : <Redirect to="login" />
        )} />
    );
};

export default PrivateRoute;