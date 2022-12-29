import {useContext, useEffect} from "react";
import {UserContext}  from '../services/UserContext';
import {Navigate} from "react-router-dom";

function Logout() {

    const {logout} = useContext(UserContext);

    useEffect(() => {
        logout();
      }, []);

    return (<Navigate to="/"/>);
}

export default Logout;