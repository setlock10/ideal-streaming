import { NavLink } from "react-router-dom"
import {useHistory} from 'react-router-dom'

function NavBar({setUser, setIsAuthenticated, isAuthenticated}){
    const history = useHistory()

    function logout()
    {
      fetch('/logout',{
          method:'DELETE'
      })
      .then(()=>{
          setIsAuthenticated(false)
          setUser(null)
          history.push("/Logon")
       })

    }

    

    return(
        <div name="navBars">
            <nav className="navLinks">
                <NavLink  to="/">Movies</NavLink>
                <NavLink  to="/">Series</NavLink>
            </nav>
            <nav className="navLinksRight">
                {isAuthenticated?(<NavLink  to="/Bookmarks">My Stuff</NavLink>):( <NavLink  to="/Logon">Sign In</NavLink>)}
                {isAuthenticated?(<button className="button-nav" style={isAuthenticated?{visibility:'visible'}:{visibility:'hidden'}} onClick={()=>logout()}>Sign Out</button>):( <NavLink  to="/SignupPage">Sign Up</NavLink>)}
           
            </nav>
            
        </div>
        )
    
    
    
    }
    
    export default NavBar;