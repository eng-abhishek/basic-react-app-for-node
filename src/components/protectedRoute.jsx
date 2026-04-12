import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ allowedRoles }) => {

// console.log("Allowed roles in ProtectedRoute:", allowedRoles);

// return false;

const [isValid, setIsValid] = useState(null);  

    useEffect(() => {

        const verifyUser = async () => {

            try {
                const token = localStorage.getItem('token');
                const userRole = localStorage.getItem('userRole');  

                if (!token) {
                    setIsValid(false);
                    return;
                }

                const res = await axios.get('http://localhost:1000/api/check-valid-user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            
                console.log("User role from response:", res); 

                if (res.data.role !== allowedRoles) {
                    console.log("User role does not match allowed roles. Logging out.");
                    return;
                    localStorage.removeItem('token');
                    localStorage.removeItem('userRole');
                    setIsValid(false);
                    return;
                }
                
                setIsValid(true);

            }catch (error) {
                console.log("Error verifying user:", error);
                localStorage.removeItem('token');
                localStorage.removeItem('userRole');
                setIsValid(false);
            }
        }

        verifyUser();
     
    },[allowedRoles]);


     if (isValid === null) {
        return <div>Loading...</div>;   

     } else if (isValid === false) {
        return <Navigate to="/login" />;
     }      
        return <Outlet />;
}

export default ProtectedRoute;