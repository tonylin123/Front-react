import {React, useState, createContext} from "react";
import axios from 'axios';


export const CitiesContext = createContext();

export function CitiesProvider({children}) {
    
    const apiURL = "https://localhost:7133/api/cities";

    const [cities, setCities] = useState([]);
    
    const getAllCities = () => {
        axios.get(`${apiURL}`)
        .then(function (response) {
            let cities = response.data;
            setCities(cities);
        })
        .catch(function (error) {
            console.log(error);
            let emptyList = [];
            setCities(emptyList);
        });
    }

    return (
    <CitiesContext.Provider value={{cities, getAllCities}}>
        {children}
    </CitiesContext.Provider>
    );
}