import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {

    const navigate = useNavigate();

    const handleLogout = async () => {

        try {
            const token = localStorage.getItem('token');

            const res = await axios.get('http://localhost:1000/api/user-logout', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (res) {

                localStorage.removeItem('token');

                navigate('/login');
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (<>
        <h1>Dashboard</h1>
        <button className='btn btn-secondary' onClick={handleLogout}>Click To Logout</button>
    </>);
}

export default Dashboard;   