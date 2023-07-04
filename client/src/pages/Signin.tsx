import { useState } from 'react';
import React from 'react';

import '../styles/Signin.css';

export default function Signin() {
  const [emailId, setEmailId] = useState("");

  const onSetEmailId = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setEmailId(value);
  }


  return (
    <div className='signin'>
      <div className='signinimg'>
        <img src='signin.jpg' alt='Signin' />
      </div>
      <div className='signinbox'>
        <div className="text">
          <h1 id='head'>Fill what we know <span id='orange'>!</span></h1>
          <div>
            <input type='email' placeholder='Enter Email' value={emailId} onChange={onSetEmailId} />
          </div>
          <div>
            <button className='btn1'>Sign In</button><br></br>
          </div>
          <div>
            <form>
              <a href='signup'><input type='button' id='btn2' value={"Sign Up"} /> </a>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}