import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
 
const [formData, setFormData] = useState({'username':'','email':'','password':'','confirmPassword':'','dob':'','address':'','profile_image':''});
const [successMessage, setSuccessMessage] = useState('');
const [resetKey, setResetKey] = useState(0);

const handleFormDataChange = (e) =>{
    setFormData({...formData,[e.target.id]:e.target.value});
}

const handleUserProfileChange = (e) => {
    console.log(e.target.files[0]);
    setFormData({...formData,'profile_image':e.target.files[0]});
}

const handleSubmit = (e) =>{
  e.preventDefault();
  try{
    
   axios.post('http://localhost:1000/api/user-register',formData,
   {
    headers:{
        'Content-Type':'multipart/form-data',
    }
   }
   ).then((response) => {
     console.log(response);
     setSuccessMessage('Registration successful!');
     setFormData({'username':'','email':'','password':'','confirmPassword':'','dob':'','address':'','profile_image':''});
     setResetKey(prev => prev + 1);
     // Clear success message after 5 seconds
     setTimeout(() => setSuccessMessage(''), 5000);
   }).catch((error) => {
     console.log(error);
     // Optionally handle error
   });
  }catch(err){
    console.log(err);
  }

}


return(<>
<div className='container'>
<div className='row'>
<div className='col-sm-2'></div>
<div className='col-sm-8'>
<h1>Register</h1>

<form onSubmit={handleSubmit}>

<div className='form-group'>
<label htmlFor='username'>Username</label>
<input type='text' className='form-control' onChange={handleFormDataChange} id='username' placeholder='Enter username' value={formData.username} />
</div>

<div className='form-group'>
<label htmlFor='email'>Email</label>
<input type='email' className='form-control' onChange={handleFormDataChange} id='email' placeholder='Enter email' value={formData.email} />
</div>


<div className='form-group'>
<label htmlFor='password'>Password</label>
<input type='password' className='form-control' onChange={handleFormDataChange} id='password' placeholder='Enter password' value={formData.password} />
</div>


<div className='form-group'>
<label htmlFor='confirmPassword'>Confirm Password</label>
<input type='password' className='form-control' onChange={handleFormDataChange} id='confirmPassword' placeholder='Enter password' value={formData.confirmPassword} />
</div>

<div className='form-group'>
<label htmlFor='dob'>DOB</label>
<input type='date' className='form-control' onChange={handleFormDataChange} id='dob' placeholder='Enter date of birth' value={formData.dob} />
</div>

<div className='form-group'>
<label htmlFor='address'>Address</label>
<input type='text' className='form-control' onChange={handleFormDataChange} id='address' placeholder='Enter address' value={formData.address} />
</div>


<div className='form-group'>
<label htmlFor='profile_image'>Profile Image</label>
<input type='file' className='form-control' onChange={handleUserProfileChange} id='profile_image' key={resetKey}/>
</div>

<br/>
<button type='submit' className='btn btn-primary'>Register</button>
</form>

{successMessage && <div className='alert alert-success mt-3'>{successMessage}</div>}

</div>
<div className='col-sm-2'>
</div>

<p className='text-center'>Don't have an account? <Link to="/register">Register here</Link></p>

</div>
</div>


   </>);

}

export default Register;