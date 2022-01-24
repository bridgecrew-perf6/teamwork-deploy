import React, { useState } from 'react';
import '../assets/styles/login.css'
import bg from '../assets/images/loginimage.svg';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setusername] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()
  function submit(e){
   e.preventDefault()
   navigate('/home')
  }
  return(
    <div className='container'>
      <div className='bg-img'> 
        <img className='image' src={bg} alt="" />
      </div>

      <div className='login'>
        <h1 className='headerText'>teamwork</h1>
        

        <div className='siginDiv'>
          <div className='signintext'>Sign in</div>
          <div className='descText'>Stay connected with your colleagues</div>
        </div>

        <form className='form' onSubmit={submit}>

          <div className='emailDiv'>
            <label>Email or Username <span className='red'>*</span></label>
            <input className='inputBox' value={username} onChange={(e)=> setusername(e.target.value)} placeholder='Enter your email or username here'/>
          </div>

          <div className='emailDiv'>
            <label>Password <span className='red'>*</span></label>
            <div className='input_icons'>
              <input type={visible ? "text" : "password"} className='inputBox' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter your password here'/>
              <span onClick={() => setVisible(!visible)}><FaEye /></span>
            </div>
          </div>

          <button className='button'>Submit</button>
        </form>
      </div>    
    </div>
  )
}

export default Login;
