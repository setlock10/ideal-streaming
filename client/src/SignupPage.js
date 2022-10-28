import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function SignupPage({ user, setUser, setIsAuthenticated, isAuthenticated}){

    const [formData, setFormData] = useState({
        //username:'',
        email:'',
        password:''
    })
    // var logo = document.getElementById("logo")
    const [errors, setErrors] = useState([])
    const history = useHistory()

    

    const {username, email, password} = formData


    function onSignup(e){
        e.preventDefault()
        fetch(`/signup`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
          })
          .then(res => {
            if(res.ok){
              res.json()
              .then(user=>{
                setUser(user)
                setIsAuthenticated(true)
                history.push("/Profile")
               
              })
              
            } else {
              res.json()
              .then(json => setErrors(json.errors))
            }
          })
  
    }

   

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
  
     return(
        <div className="login" >
          <h1 className='form-title'>Sign Up</h1>
            <div className="loginBackground" ></div>
            <form className="loginForm"  onSubmit={onSignup}>
                <div>
                    <input className="inputBox" type='text' name='email' placeholder="Email Address" value={email} onChange={handleChange} />
                </div>
                <div>
                    <input className="inputBox"  type='password' name='password' placeholder="Password" value={password} onChange={handleChange} />
                </div>
                <input className="button"  type='submit' value='SIGN UP' /> 
            </form>       
        </div>
    )
 
 
 
 }
 export default SignupPage;