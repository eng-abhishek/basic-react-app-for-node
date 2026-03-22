import react,{useState} from 'react';
import { useNavigate ,Link } from 'react-router-dom';


const login = () => {

const navigate = useNavigate();

const [formData, setFormData] = useState({'email':'','password':''});


const handleEmailChange = (e) =>{
// setFormData(e.target.value);

  setFormData({...formData,'email':e.target.value});
  console.log(e.target.value);
}

const handlePasswordChange = (e) =>{
// setFormData(e.target.value);
  setFormData({...formData,'password':e.target.value});
  console.log(e.target.value);
}

const handleSubmit = (e) => {
console.log('Form submitted');
    e.preventDefault(); 

}

return (<>
<div className='container'>
<div className='row'>
<div className='col-sm-2'></div>
<div className='col-sm-8'>
<h1>Login</h1>

<form onSubmit={handleSubmit}>

<div className='form-group'>
<label htmlFor='email'>Email</label>
<input type='email' className='form-control' onChange={handleEmailChange} id='email' placeholder='Enter email' />
</div>

<div className='form-group'>
<label htmlFor='password'>Password</label>
<input type='password' className='form-control' onChange={handlePasswordChange} id='password' placeholder='Enter password' />
</div>
<br/>
<button type='submit' className='btn btn-primary'>Login</button>
</form>

</div>
<div className='col-sm-2'>
</div>

<p className='text-center'>Don't have an account? <Link to="/register">Register here</Link></p>

</div>
</div>
</>);

}

export default login;