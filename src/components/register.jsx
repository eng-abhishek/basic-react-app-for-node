import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {SignUpFommSchema} from './SignUpFormSchema'
import { useFormik } from "formik";

const Register = () => {

  /*
  const [formData, setFormData] = useState({ 'username': '', 'email': '', 'password': '', 'confirmPassword': '', 'dob': '', 'address': '', 'profile_image': '' });
  */

  const [successMessage, setSuccessMessage] = useState('');
  const [resetKey, setResetKey] = useState(0);

  /*
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  const handleUserProfileChange = (e) => {
    console.log(e.target.files[0]);
    setFormData({ ...formData, 'profile_image': e.target.files[0] });
  }
  */

  const initialRegisterInput = {
   username:'',
   email:'',
   password:'',
   confirmPassword:'',
   dob:'',
   address:'',
   profile_image:''
  };

  const [handleChange, handleSubmit, values, errors, handleBlur, touched]  = useFormik({
    initialValues:initialRegisterInput,
    validationSchema:SignUpFommSchema,
    onSubmit: async(value,{resetForm}) => {
      try{

      const res = await axios.post('http://localhost:1000/api/user-register',value,{
      
      headers: {
            'Content-Type': 'multipart/form-data',
          }
      });

      console.log('Success:', res);

      setSuccessMessage('Registration successful!');
      
      resetForm();

      setTimeout(() => setSuccessMessage(''), 5000);
      }catch(error){
         console.log(error);
      }
    }
  });

  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    try {

      axios.post('http://localhost:1000/api/user-register', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      ).then((response) => {
        console.log(response);
        setSuccessMessage('Registration successful!');
        setFormData({ 'username': '', 'email': '', 'password': '', 'confirmPassword': '', 'dob': '', 'address': '', 'profile_image': '' });
        setResetKey(prev => prev + 1);
        // Clear success message after 5 seconds
        setTimeout(() => setSuccessMessage(''), 5000);
      }).catch((error) => {
        console.log(error);
        // Optionally handle error
      });
    } catch (err) {
      console.log(err);
    }
  }
  */

  return (<>
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="card shadow border-0 rounded-3">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center mb-4 fw-bold text-primary">Create Your Account</h2>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* Username */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold" htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="johndoe123" onChange={handleChange} value={values.username} />
                      {errors.username && touched.username ? <span className='text-danger'>{errors.username}</span> : null}
                  </div>

                  {/* Email */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold" htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={handleChange} value={values.email} />
                       {errors.email && touched.email ? <span className='text-danger'>{errors.email}</span> : null}
                
                  </div>

                  {/* Password */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold" htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="••••••••" onChange={handleChange} value={values.password} />
                    {errors.password && touched.password ? <span className='text-danger'>{errors.password}</span> : null}
                  </div>

                  {/* Confirm Password */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold" htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="••••••••" onChange={handleChange} value={values.confirmPassword} />
                    {errors.confirmPassword && touched.confirmPassword ? <span className='text-danger'>{errors.confirmPassword}</span> : null}
                  </div>

                  {/* DOB */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold" htmlFor="dob">Date of Birth</label>
                    <input type="date" className="form-control" id="dob" onChange={handleChange} value={values.dob} />
                    {errors.dob && touched.dob ? <span className='text-danger'>{errors.dob}</span> : null}
                  </div>

                  {/* Profile Image */}
                  
                  {/*
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold" htmlFor="profile_image">Profile Image</label>
                    <input type="file" className="form-control" id="profile_image" key={resetKey} onChange={handleUserProfileChange} />
                  </div>
                  */}
                
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold" htmlFor="profile_image">Profile Image</label>
                    <input type="file" className="form-control" id="profile_image" onChange={handleChange} />
                  </div>

                  {/* Address - Full Width */}
                  <div className="col-12 mb-4">
                    <label className="form-label fw-semibold" htmlFor="address">Address</label>
                    <textarea className="form-control" id="address" rows="2" placeholder="Street, City, Zip Code" onChange={handleChange} value={values.address}></textarea>
                  </div>
                </div>

                {/* Success Message Alert */}
                {successMessage && (
                  <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    {successMessage}
                  </div>
                )}

                {/* Register Button */}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-lg shadow-sm">
                    Register Now
                  </button>
                  <p className="text-center mt-3 mb-0">
                    Already have an account? <Link to="/login" className="text-primary fw-bold text-decoration-none">Login Here</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);

}

export default Register;