import { NavLink } from "react-router-dom"
function NavBar(){


    return(
        <nav>
            <NavLink  to="/">Movies</NavLink>
            <NavLink  to="/Profile">Profile</NavLink>
        </nav>
        )
    
    
    
    }
    
    export default NavBar;