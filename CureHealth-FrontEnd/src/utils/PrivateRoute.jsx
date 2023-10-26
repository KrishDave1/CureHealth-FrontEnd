/** @format */

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const PrivateRoute = ({ children, ...rest }) => {
    const { contextData } = useGlobalContext();
    let user = contextData.user;
    //   const auth = true;
    console.log("Private Route working");
    return user ? (
        <Routes>
        <Route {...rest}>{children}</Route>
        </Routes>
    ) : (
        <Navigate to='/login' />
    );
};

export default PrivateRoute;
