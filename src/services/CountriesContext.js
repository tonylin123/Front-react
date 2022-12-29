import {React, useState, createContext} from "react";
import axios from 'axios';

export const CountriesContext = createContext();

export function CountriesProvider({children}) {
    
    const apiURL = "https://localhost:7133/api/countries";

    const [countries, setCountries] = useState([]);
    const [citiesInCountry, setCitiesInCountry] = useState([]);
    
    const getAllCountries = () => {
        axios.get(`${apiURL}`)
        .then(function (response) {
            let countries = response.data;
            setCountries(countries);
        })
        .catch(function (error) {
            console.log(error);
            let emptyList = [];
            setCountries(emptyList);
        });
    }

    const getCountry = async (id) => {

        let country = {};

        try 
        {
            const response = await axios.get(`${apiURL}/${id}`);
            country = response.data;
        } 
        catch (error) 
        {
            console.error(error);
        }
        
        return country;
    }

    const getCitiesInCountry = async (countryID) => {

        try 
        {
            const response = await axios.get(`${apiURL}/${countryID}`);
            let country = response.data;
            setCitiesInCountry(country.cities);
        } 
        catch (error) 
        {
            console.error(error);
        }
    }

    return (
    <CountriesContext.Provider value={{countries, getAllCountries, getCountry, citiesInCountry, getCitiesInCountry}}>
        {children}
    </CountriesContext.Provider>
    );
}