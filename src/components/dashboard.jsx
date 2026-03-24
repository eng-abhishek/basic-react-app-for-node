import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {

    const navigate = useNavigate();
    
    const token = localStorage.getItem('token');
    const [userInfo,setUserInfo] = useState();

    useEffect( async ()=>{
     const res = await axios.get('http://localhost:1000/api/user-dashboard',{
       headers:{
        Authorization:`Bearer ${token}`,
       }
      });
    //   setUserInfo(res);
         console.log(res);
    },[]);

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
         <p1>Name: {userInfo}</p1>
        <button className='btn btn-secondary' onClick={handleLogout}>Click To Logout</button>
    </>);
}

export default Dashboard;   