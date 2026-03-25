import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {

    const navigate = useNavigate();
    
    const token = localStorage.getItem('token');
    const [userInfo,setUserInfo] = useState({});

    useEffect(()=>{

    const getData = async () => {

    const res = await axios.get('http://localhost:1000/api/user-dashboard',{
       headers:{
        Authorization:`Bearer ${token}`,
       }
      });
      console.log(res.data.userInfo);
        setUserInfo(res.data.userInfo);
    }
    getData();
    },[]);

    const imgBase64 = userInfo?.profileImage;

    const cleanBase64 = imgBase64?.replace(/\s/g, '');

    const handleLogout = async () => {

        try {
            const token = localStorage.getItem('token');
            

            // const res = await axios.get('http://localhost:1000/api/user-logout', {
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     }
            // });

            const res = "true";

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
         <p>Username: {userInfo?.username}</p>
         <p>Email: {userInfo?.email}</p>
         <p>DOB: {userInfo?.dob}</p>
         <p>Address: {userInfo?.address}</p>
         <p>Img: {userInfo?.profileImage}</p>
         <p>Img: <img src={`data:image/png;base64 ${cleanBase64}`} alt="profile" /></p>
        <button className='btn btn-secondary' onClick={handleLogout}>Click To Logout</button>
    </>);
}

export default Dashboard;   