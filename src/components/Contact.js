import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';


function Contact() {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();
    const handleContact = () => {
        axios.post('https://reqres.in/api/contact', {
            "name": name,
            "email": email,
            "phone": phone,
            "message": message,

        })
            .then(function (response) {
                console.log(response);
                toast.success("Contact Successfully")
                navigate("/")

            })
            .catch(function (error) {
                console.log(error);
                toast.error("enter the contact wromg")

            });

        console.log("Name: " + name)
        console.log("Email: " + email)
        console.log("Phone: " + phone)
        console.log("Message: " + message)
    }

    return (
        <div className='container'>
            <div className='col-4 offset-4'>
                <h1>Contact Us</h1>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input type="text" className="form-control" placeholder="John Doe" onChange={(e) => setname(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className='form-label'>Email</label>
                    <input type="email" className="form-control" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                </div>


                <div className="mb-3">
                    <label className='form-label'>Phone</label>
                    <input type="password" className="form-control" onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <input type="password" className="form-control" onChange={(e) => setMessage(e.target.value)} />
                </div>

                <button type="button" class="btn btn-primary" onClick={() => handleContact()} >Contact</button><br />
                Already have account
                <Link to="/contact" >Contact</Link>

            </div>

        </div>








    )
}

export default Contact