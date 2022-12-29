import {React, useState, createContext} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export const ContactsContext = createContext();

export function ContactsProvider({children}) {
    
    const apiURL = "https://localhost:7133/api/people";

    const navigate = useNavigate();

    const [contacts, setContacts] = useState([]);
    
    const getAllContacts = () => {
        axios.get(`${apiURL}`)
        .then(function (response) {
            let contacts = response.data;
            setContacts(contacts);
        })
        .catch(function (error) {
            console.log(error);
            let emptyList = [];
            setContacts(emptyList);
        });
    }
    
    const getContact = async (id) => {

        let contact = {};

        try 
        {
            const response = await axios.get(`${apiURL}/${id}`);
            contact = response.data;
            return contact;
        } 
        catch (error) 
        {
            console.error(error);
            if (error.response.status === 404)
            {
                navigate("*");
            }
            else
            {
                navigate("/");
            }
        }
    }
    
    const addContact = async (contact) => {

        try 
        {
            await axios.post(`${apiURL}`, contact);
            getAllContacts(); // refresh contacts list
        } 
        catch (error) 
        {
            console.error(error);
        }
    };

    const updateContact = async (id, contactInfo) => {

        // console.log(id);
        // console.log(contactInfo);

        try 
        {
            const response = await axios.put(`${apiURL}/${id}`, contactInfo);
            console.log(response.data);
        } catch (error) 
        {
            console.error(error);
        }
    }

    const deleteContact = async (id) => {
        try 
        {
            await axios.delete(`${apiURL}/${id}`);
        } 
        catch (error) 
        {
            console.error(error);
        }
    };

    const [sortOrder, setSortOrder] = useState("a-z");

    const sortContacts = () => {

        let sorted = [...contacts];

        if (sortOrder === "a-z")
        {
            //sort a-z
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            setSortOrder("z-a");
        }
        else 
        {
            //sort z-a
            sorted.sort((a, b) => -1 * a.name.localeCompare(b.name));
            setSortOrder("a-z");
        }

        setContacts(sorted);
    }

    return (
    <ContactsContext.Provider value={{contacts, getAllContacts, getContact, addContact, updateContact, deleteContact, sortContacts}}>
        {children}
    </ContactsContext.Provider>
    );
}