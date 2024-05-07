import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';


function Register() {
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PasswordAgain, setPasswordAgain] = useState("");


  const navigate = useNavigate();
  const handleRegister = () => {
    axios.post('https://reqres.in/api/register', {
      "email": email,
      "password": password

    })
      .then(function (response) {
        console.log(response);
        toast.success("Registered Successfully")
        navigate("/")

      })
      .catch(function (error) {
        console.log(error);
        toast.error("enter the emailid wromg")

      });

    console.log("Email: " + email)
    console.log("Password: " + password)

    console.log("username: " + Username)
    console.log("Email: " + email)
    console.log("Password: " + password)
    console.log("PasswordAgain: " + PasswordAgain)

  }

  return (

    <div className='container'>
      <div className='col-4 offset-4'>
        <h1>Sign Up</h1>
        <div className='mb-3'>
          <label className='form-label'>Username</label>
          <input type="text" className="form-control" placeholder="John Doe" onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className='form-label'>Email</label>
          <input type="email" className="form-control" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className='form-label'>Password</label>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Password Again</label>
          <input type="password" className="form-control" onChange={(e) => setPasswordAgain(e.target.value)} />
        </div>


        <button type="button" class="btn btn-primary" onClick={() => handleRegister()} >Register</button><br />
        Already have account
        <Link to="/login" >Login</Link>

      </div>

    </div>
  )
}

export default Register