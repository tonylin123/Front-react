import {useContext} from "react";
import {UserContext}  from '../../services/UserContext';

import Nav from 'react-bootstrap/Nav';
import {NavLink} from "react-router-dom";

function Navigation() {

    const {user} = useContext(UserContext);
    const {logout} = useContext(UserContext);
    
    let activeLink = {
        fontWeight: "bold",
        textDecoration: "none",
    };
    
    let inactiveLink = {
        fontWeight: "normal",
        textDecoration: "none"
    };

    if (user.auth)
    {
        return (
            <Nav>
                <NavLink to="home" style={({ isActive }) => isActive ? activeLink : inactiveLink}>Home</NavLink>
                <NavLink to="contacts" style={({ isActive }) => isActive ? activeLink : inactiveLink}>Contacts</NavLink>
                <NavLink onClick={logout} style={{textDecoration: "none"}}>Logout</NavLink>
            </Nav>
        );
    }
    else
    {
        return (
            <Nav>
                <NavLink to="home" style={({ isActive }) => isActive ? activeLink : inactiveLink}>Home</NavLink>
                <NavLink to="login" style={({ isActive }) => isActive ? activeLink : inactiveLink}>Login</NavLink>
            </Nav>
        );
    }
}
  
export default Navigation;