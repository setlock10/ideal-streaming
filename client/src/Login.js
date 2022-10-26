import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Login({ user, setUser, setIsAuthenticated, isAuthenticated}){

    const [formData, setFormData] = useState({
        //username:'',
        email:'',
        password:''
    })
    // var logo = document.getElementById("logo")
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {username, email, password} = formData


    function onLogin(e){
        e.preventDefault()
        const user = {
            //username,
            email,
            password
        }
        // Logs in user
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setFormData({
                        email:'',
                        password:''
                    })


                    history.push(`/Profile`)
                    setIsAuthenticated(true)
                    setUser(user)
                    // debugger

   
                })
            }else {
                res.json().then(json => setErrors(json.errors))
            }
        })
       
    }

    function logout()
    {
        // setIsAuthenticated(false)
        //   setUser(null)
      fetch('/logout',{
          method:'DELETE'
      })
      .then(()=>{
          setIsAuthenticated(false)
          setUser(null)
          
        //   debuggerSess
          if(user)
            console.log("ff")
        else
            console.log("hey, hey")

      })

    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
  
     return(
        <div className="login" >
            <h1 className='form-title'>Sign In</h1>
            <div className="loginBackground" ></div>
            <form className="loginForm"  onSubmit={onLogin}>
                <div>
                    <input className="inputBox" type='text' name='email' placeholder="Email Address" value={email} onChange={handleChange} />
                </div>
                <div>
                    <input className="inputBox"  type='password' name='password' placeholder="Password" value={password} onChange={handleChange} />
                </div>
                <input className="button"  type='submit' value='SIGN IN' /> 
            </form>  
            {/* <div className="divider"></div>      */}
        </div>
    )
 
 
 
 }
 export default Login;