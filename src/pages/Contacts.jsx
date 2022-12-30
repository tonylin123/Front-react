import {useContext} from "react";

import {Navigate} from "react-router-dom";

import ContactForm from '../components/ContactForm';
import ContactList from "../components/ContactList";

function Contacts() {

   
        return (
            <>
                <h1>Contacts</h1>
                <ContactList/>
                <ContactForm/>
            </>
        );
    

}

export default Contacts;