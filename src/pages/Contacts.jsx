import {useContext} from "react";
import {UserContext}  from '../services/UserContext';
import {Navigate} from "react-router-dom";

import ContactForm from '../components/ContactForm';
import ContactList from "../components/ContactList";

function Contacts() {

    const {user} = useContext(UserContext);

    if (user.auth === false) 
    {
        return (<Navigate to="/login"/>);
    }
    else
    {
        return (
            <>
                <h1>Contacts</h1>
                <ContactList/>
                <ContactForm/>
            </>
        );
    }

}

export default Contacts;