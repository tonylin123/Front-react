


import Nav from 'react-bootstrap/Nav';
import {NavLink} from "react-router-dom";

function Navigation() {

    
    
    let activeLink = {
        
        fontWeight: "bold",
        textDecoration: "none",
    };
    
    let inactiveLink = {
        fontWeight: "normal",
        textDecoration: "none"
    };

    
        return (
            <Nav>
                <NavLink to="home" style={({ isActive }) => isActive ? activeLink : inactiveLink}>Home</NavLink>
                <NavLink to="contacts" style={({ isActive }) => isActive ? activeLink : inactiveLink}>People</NavLink>
                
            </Nav>
        );
    
   
}
  
export default Navigation;