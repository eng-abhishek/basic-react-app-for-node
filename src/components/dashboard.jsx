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
        setUserInfo(res.data.userInfo);
    }
    getData();
    },[]);

    const imgBase64 = userInfo?.profileImage;

    const cleanBase64 = imgBase64?.replace(/\s/g, '');

    const handleLogout = async () => {

        try {
            const token = localStorage.getItem('token');
            
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

<div className="container py-5">
  <div className="row justify-content-center">
    <div className="col-md-10">
      {/* Wrapper Card for better structure and border */}
      <div className="card shadow-sm border-0">
        
        {/* Header Section */}
        <div className="card-header bg-primary text-white text-center py-3">
          <h2 className="mb-0 fs-3">User Dashboard</h2>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th className="ps-4">Username</th>
                  <th>Email</th>
                  <th>DOB</th>
                  <th>Address</th>
                  <th className="text-center">Profile Img</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ps-4 fw-bold text-secondary">{userInfo?.username}</td>
                  <td>{userInfo?.email}</td>
                  <td>{userInfo?.dob}</td>
                  <td>{userInfo?.address}</td>
                  <td className="text-center">
                    <img 
                      src={`data:image/png;base64,${cleanBase64}`} 
                      alt="profile" 
                      className="rounded-circle border shadow-sm"
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer for Actions */}
        <div className="card-footer bg-white text-end py-3">
          <button className="btn btn-outline-danger px-4" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>);
}

export default Dashboard;   