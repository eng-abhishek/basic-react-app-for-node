import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = () => {

    const token = localStorage.getItem('token');

    const [isValid, setIsValid] = useState(null);

    useEffect(() => {

        const verifyUser = async () => {

            if (!token) {
                setIsValid(false);
                return;
            }

            try {
                await axios.get('http://localhost:1000/api/check-valid-user', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setIsValid(true);

            } catch (error) {

                localStorage.removeItem('token');
                setIsValid(false);
            }

        };
        verifyUser();
    }, []);


    if (isValid === null) {
        return <div>Checking authentication...</div>;
    }

    return isValid ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;