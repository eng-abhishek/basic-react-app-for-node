import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = () => {

    const token = localStorage.getItem('token');

    if (token === null) {
        return <div>Checking authentication...</div>;
    }

    return token ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;