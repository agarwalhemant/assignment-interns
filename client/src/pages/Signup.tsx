import { useState } from 'react';
import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import '../styles/Signup.css';

export default function Signup() {
  const [inputdata, setInputdata] = useState({
    fname: "",
    lname: "",
    emailId: "",
  });

  const navigate = useNavigate();


  // setinputvalue
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value })
  }




  return (
    <div className='signup'>
      <div className='signupimg'>
        <img src='signup.jpg' alt='Signup' />
      </div>
      <div className='signupbox'>
        <div className="text">
          <h1 id='head'>Let us know <span id='orange'>!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ span>
            <a id='anc' href='signin' >Sign <span id='orange'>In</span></a>
          </h1>
          <div>
            <input type='text' placeholder='First Name' name='fname' onChange={handleChange} />
          </div>
          <div>
            <input type='text' placeholder='Last Name' name='lname' onChange={handleChange} />
          </div>
          <div>
            <input type='email' placeholder='Enter Email' name='emailId' onChange={handleChange} />
          </div>
          <div>
            <button className='btn1'>Sign Up</button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

