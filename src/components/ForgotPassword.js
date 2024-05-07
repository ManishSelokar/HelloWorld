import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function ForgotPassword() {
  const [youremailaddress, setyourEmailAddress] = useState("");


  const navigate = useNavigate();
  const ForgotPassword = () => {
    axios.post('https://reqres.in/api/ForgotPassword', {
      "email": youremailaddress,


    })
      .then(function (response) {
        console.log(response);
        toast.success("ForgotPassword Successfully")
        navigate("/")

      })
      .catch(function (error) {
        console.log(error);
        toast.error("enter the emailid wromg")

      });


  }
  return (
    <div className='container'>
      <div className='col-4 offset-4'>
        <h1>Forgot Password</h1>

        <div className="mb-3">
          <label className="form-label">Your e-mail address</label>
          <input type="email" className="form-control" placeholder="Your e-mail address" onChange={(e) => setyourEmailAddress(e.target.value)} />
        </div>


        <button type="button" class="btn btn-primary" onClick={() => ForgotPassword()}> Password</button>

        <div>
          <Link to="/login">Login</Link>

        </div>


      </div>
    </div>





  )

}


export default ForgotPassword