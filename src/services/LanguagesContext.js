import {React, useState, createContext} from "react";
import axios from 'axios';

export const LanguagesContext = createContext();

export function LanguagesProvider({children}) {
    
    const apiURL = "https://localhost:7133/api/languages";

    const [languages, setLanguages] = useState([]);
    
    const getAllLanguages = () => {
        axios.get(`${apiURL}`)
        .then(function (response) {
            let languages = response.data;
            setLanguages(languages);
        })
        .catch(function (error) {
            console.log(error);
            let emptyList = [];
            setLanguages(emptyList);
        });
    }

    return (
    <LanguagesContext.Provider value={{languages, getAllLanguages}}>
        {children}
    </LanguagesContext.Provider>
    );
}