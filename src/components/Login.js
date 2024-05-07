import React, { useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = () => {
    axios.post('https://reqres.in/api/login', {
      "email": email,
      "password": password

    })
      .then(function (response) {
        console.log(response);
        props.setLoginStatus(true)
        localStorage.setItem('user', JSON.stringify({
          user: email,
          token: response.data.token

        }))
        toast.success("Login Successfully")
        navigate("/")
      })
      .catch(function (error) {
        console.log(error);
        toast.error("enter the emailid wromg")
      });

    console.log("Email: " + email)
    console.log("Password: " + password)






  }

  return (
    <div className='container'>
      <div className='col-4 offset-4'>
        <h1>Login Form</h1>

        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
            <Link to="/forgotpassword">Forgot Password</Link>
          </div>


          <button type="button" className="btn btn-primary " onClick={() => handleLogin()} >Login</button>

          <div>
            Don't have account
            <Link to="/register" >Register</Link>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login