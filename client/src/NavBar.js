import { NavLink } from "react-router-dom"
function NavBar(){

    

    return(
        <div>
            {/* <div className="logo">iDeal Streaming</div> */}
            <nav className="navLinks">
                <NavLink  to="/"     >Movies</NavLink>
                <NavLink  to="/Profile">Profile</NavLink>
            </nav>
        </div>
        )
    
    
    
    }
    
    export default NavBar;