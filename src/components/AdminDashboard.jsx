import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const AdminDashboard = () => {

    const navigate = useNavigate();

    const [adminInfo, setAdminInfo] = useState({});

    useEffect(() => {

        const getAdminData = async () => {

            const token = localStorage.getItem('token');
            const res = await Axios.get('http://localhost:1000/api/user-dashboard', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log("Admin dashboard response:", res);
            res && setAdminInfo(res.data.userInfo);
        }
        getAdminData();
    }, []);


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

    return (
        <>

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        {/* Wrapper Card for better structure and border */}
                        <div className="card shadow-sm border-0">

                            {/* Header Section */}
                            <div className="card-header bg-primary text-white text-center py-3">
                                <h2 className="mb-0 fs-3">Admin Dashboard</h2>
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
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="ps-4 fw-bold text-secondary">{adminInfo?.username}</td>
                                                <td>{adminInfo?.email}</td>
                                                <td>{adminInfo?.dob}</td>
                                                <td>{adminInfo?.address}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Footer for Actions */}
                            <div className="card-footer bg-white py-3 d-flex justify-content-end gap-2">

                                <button className="btn btn-outline-secondary" onClick={() => { navigate('/user-list'); }}>
                                    User List
                                </button>

                                <button className="btn btn-outline-danger px-4" onClick={handleLogout}>
                                    Logout
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AdminDashboard;
