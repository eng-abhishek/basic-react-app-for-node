import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from "formik";
import { LoginFormSchema } from './LoginFormSchema';

import axios from 'axios';

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({ 'email': '', 'password': '' });

  const initialloginFormInputFormik = {
    email:"",
    password:"",
  };


 const {handleChange, handleSubmit, values, errors, handleBlur, touched} = useFormik({
   initialValues:initialloginFormInputFormik,
   validationSchema:LoginFormSchema,
   onSubmit: async(value,{ resetForm }) => {

    try{

    const res = await axios.post('http://localhost:1000/api/user-login',value);
    localStorage.setItem('token', res.data.token);
    //console.log('Success:',res.data);
    navigate('/dashboard');
    //resetForm();

    }catch(error){
       console.log("Error:", error.response?.data || error.message);
    }
    // console.log(value);
    // console.log(value.email);
    // console.log(value.password);
   }
  });


/*

  const handleEmailChange = (e) => {
    // setFormData(e.target.value);
    setFormData({ ...formData, 'email': e.target.value });
    console.log(e.target.value);
  }

  const handlePasswordChange = (e) => {
    // setFormData(e.target.value);
    setFormData({ ...formData, 'password': e.target.value });
    console.log(e.target.value);
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post('http://localhost:1000/api/user-login', formData);

      localStorage.setItem('token', res.data.token);

      navigate('/dashboard');

    } catch (error) {
      console.log(error);
    }
  }
*/
  return (<>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          {/* Login Card */}
          <div className="card shadow border-0 rounded-3">
            <div className="card-body p-4 p-sm-5">
              <h1 className="text-center mb-4 fw-bold">Login</h1>

              <form onSubmit={handleSubmit}>
                {/* Floating Label for Email */}
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    value={values.email}
                    onChange={handleChange} onBlur={handleBlur}
                  />
                  <label htmlFor="email">Email address</label>
                  {errors.email && touched.email ? <span className='text-danger'>{errors.email}</span> : null}
                </div>

                {/* Floating Label for Password */}
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange} onBlur={handleBlur}
                  />
                  <label htmlFor="password">Password</label>
                  {errors.password && touched.password ? <span className='text-danger'>{errors.password}</span> : null}
                </div>

                {/* Login Button - Full Width */}
                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary btn-lg shadow-sm">
                    Login
                  </button>
                </div>

                <hr className="my-4" />

                {/* Registration Link */}
                <p className="text-center mb-0 text-muted">
                  Don't have an account? <Link to="/register" className="text-primary fw-bold text-decoration-none">Register here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);

}

export default Login;