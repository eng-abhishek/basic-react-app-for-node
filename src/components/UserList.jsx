import React,{useState,useEffect} from "react";

const UserList = () => {

return(<>
  
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
                                <tr>
                                    <td>1</td>
                                    <td>Mark Otto</td>
                                    <td>mark@example.com</td>
                                    <td><span className="badge bg-primary">Admin</span></td>
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
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>Jacob Thornton</td>
                                    <td>jacob@example.com</td>
                                    <td><span className="badge bg-secondary">User</span></td>
                                    <td><span className="badge bg-warning text-dark">Pending</span></td>
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
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>Larry Bird</td>
                                    <td>larry@example.com</td>
                                    <td><span className="badge bg-secondary">User</span></td>
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
                                </tr>

                            </tbody>

                        </table>
                    </div>

                </div>
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center mt-3">
                <span>Showing 1 to 3 of 10 entries</span>

                <nav>
                    <ul className="pagination mb-0">
                        <li className="page-item disabled">
                            <button className="page-link">Previous</button>
                        </li>
                        <li className="page-item active">
                            <button className="page-link">1</button>
                        </li>
                        <li className="page-item">
                            <button className="page-link">2</button>
                        </li>
                        <li className="page-item">
                            <button className="page-link">Next</button>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>


      </>);
};

export default UserList;