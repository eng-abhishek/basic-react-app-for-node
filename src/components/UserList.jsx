import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";

const UserList = () => {

    const [userList, setUserList] = useState({});
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [loading, setLoading] = useState(false);


    const getUserList = async (page) => {
        try {
            setLoading(true);
            const res = await axios.get(`http://localhost:1000/api/admin/users/?page=${page}&limit=10`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            });


            setTotalPage(res.data.totalPages);
            
            setUserList(res.data);
            setLoading(false); 
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    };

    useEffect(() => {

        getUserList(page);

}, [page]);

    return (<>

        <div className="container mt-4">

            {/* Page Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => navigate(-1)}
                >
                    ← Back
                </button>

                <h3 className="mb-0">User List</h3>

                <button className="btn btn-primary">
                    + Add User
                </button>
            </div>

            {/* Search + Filter */}
            <div className="card mb-3">
                <div className="card-body d-flex justify-content-between">
                    <input
                        type="text"
                        className="form-control w-25"
                        placeholder="Search user..."
                    />

                    <select className="form-select w-25">
                        <option>All Roles</option>
                        <option>Admin</option>
                        <option>User</option>
                    </select>
                </div>
            </div>

            {/* Table Card */}
            <div className="card shadow-sm">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        {loading ? <p>Loading....</p> : (


<table className="table table-hover mb-0">

                            <thead className="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userList.users && userList.users.map((value,index)=>{
                                 return (
                                    <tr key={value._id || index}>
                                    <td>{index+1}</td>
                                    <td>{value.username}</td>
                                    <td>{value.email}</td>
                                    <td><span className="badge bg-primary">{ value.role[0].toUpperCase() + value.role.slice(1)}</span></td>
                                    <td><span className="badge bg-success">Active</span></td>
                                    <td className="text-end">
                                        <button className="btn btn-sm btn-outline-secondary me-2">
                                            More
                                        </button>
                                        <button className="btn btn-sm btn-outline-primary me-2">
                                            Edit
                                        </button>
                                        <button className="btn btn-sm btn-outline-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>);
                                })}
                            </tbody>

                        </table>


                        )}

                        
                        
                    </div>

                </div>
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center mt-3">
                <span>Showing 1 to 3 of 10 entries</span>

                <nav>
                    <ul className="pagination mb-0">
                        <li className="page-item">
                            <button className="page-link" disabled={page === 1} onClick={()=>setPage(page-1)}>Previous</button>
                        </li>

                        <li className="page-item active">
                            <button className="page-link">{page} of {totalPage}</button>
                        </li>

                        <li className="page-item">
                            <button className="page-link" disabled={page === totalPage} onClick={()=>setPage(page+1)}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>


    </>);
};

export default UserList;