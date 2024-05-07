import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';



function PersonalDetails() {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmailid] = useState("");
  const [gender, setGender] = useState("");
  const [Contact, setContact] = useState("");
  const [EducationalQualification, setEducationalQualification] = useState("");
  const [Degree, setDegree] = useState("");
  const [Engineering, setEngineering] = useState("");
  const [Hobbies, setHobbies] = useState("");
  const [Address, setAddress] = useState("");
  const [AttachResume, setAttachResume] = useState("");

  const handlePersonalDetails = () => {
    axios.post('https://reqres.in/api/PersonalDetails',{
      "email": email,
      "password": password

    })
    .then(function (response){  
      console.log(response);

    })
    .catch(function (error){
      console.log(error);

    });

    console.log("Email: " + email)
    console.log("Password: " + password)

    console.log("name: " + setname)
    console.log("password: " + password)
    console.log("email: " + email)
    console.log("gender: " + gender)
    console.log("contact: " + Contact)
    console.log("educationalqualification: " + EducationalQualification)
    console.log("degree: " + Degree)
    console.log("engineering: " + Engineering)
    console.log("hobbies: " + Hobbies)
    console.log("address: " + Address)
    console.log("attachresume: " + AttachResume)








  



  

  }
  
  return (
    <div className="container">
        <div className='col-4 offset-4'>
          <h3 style={{color: 'red'}}>PersonalDetails</h3>


          <h1>Name</h1>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input type="email" className="form-control" placeholder="name@example.com" onChange={(e) => setname(e.target.value)} />  
          </div>

          <div className="mb-3">
        <label className='form-label'>password</label>
        <input type="email" className="form-control" placeholder="name@example.com" onChange={(e) => setPassword(e.target.value)} />  
      </div>

      <div className="mb-3">
        <label className='form-label'>E-mail id:</label>
        <input type="password" className="form-control" onChange={(e) => setEmailid(e.target.value)} />
      </div> 
      </div>

      <div className="mb-3">
        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="Male" required />
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" required />
        <label for="female">Female</label>
      </div>

      <div className="mb-3">
        <label className="form-label">Contact#:</label>
        <input type="password" className="form-control" onChange={(e) => setContact(e.target.value)} />  
      </div>

      <div className="mb-3">
        <label className="form-label">Educational Qualification</label>
        <h3 style={{color: 'red'}}>EducationalQualification</h3>
        <input type="password" className="form-control" onChange={(e) => setEducationalQualification(e.target.value)} />  
      </div>

      <div className="mb-3">
        <label className="form-label">Degree:</label>
        <select id="engineering" name="engineering" required>
          <option value="" disabled selected>--select option--</option>
          <option value="electrical">Electrical</option>
          <option value="CS">Computer Science</option>
        <input type="password" className="form-control" onChange={(e) => setDegree(e.target.value)} />  
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Engineering:</label>
        <input type="password" className="form-control" onChange={(e) => setEngineering(e.target.value)} />  
      </div>

      <div className="mb-3">
        <label className="form-label">Hobbies:</label>
        <label>Hobbies:</label>
        <input type="checkbox" id="chess" name="hobbies" value="playing cgess"/>
        <label for="chess">playing chess</label>
        <input type="checkbox" id="books" name="hobbies" value="Reading Books"/>
        <label for="books">Reading Books</label>
        <input type="password" className="form-control" onChange={(e) => setHobbies(e.target.value)} />  
      </div>

      <div className="mb-3">
        <label className="form-label">Address</label>
        <h3 style={{color: 'red'}}>Address</h3>   
        <input type="password" className="form-control" onChange={(e) => setAddress(e.target.value)} />  
      </div>

      <div className="mb-3">
        <label className="form-label">Attch Resume:</label>
        <input type="password" className="form-control" onChange={(e) => setAttachResume(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Button</label>
        <input type="password" className="form-control" />
      </div>
      </div>
      
    )
}

export default PersonalDetails