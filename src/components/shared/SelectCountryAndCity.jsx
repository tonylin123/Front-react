import {useState, useEffect, useContext} from "react";

import {CountriesContext} from "../../services/CountriesContext";

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SelectCountryAndCity(props) {

    //props.contactInfo
    //props.setContactInfo

    const {countries} = useContext(CountriesContext);
    const {getAllCountries} = useContext(CountriesContext);
    const [selectedCountry, setSelectedCountry] = useState("");

    const {citiesInCountry} = useContext(CountriesContext);
    const {getCitiesInCountry} = useContext(CountriesContext);

    const handleSelectCountry = (event) => {
        setSelectedCountry(event.target.value);
    }

    const handleChange = (event) => {
        props.setContactInfo({ ...props.contactInfo, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        getAllCountries();
    }, []);
    
    useEffect(() => {
    
        if (selectedCountry !== "")
        {
            getCitiesInCountry(selectedCountry);
            props.setContactInfo({...props.contactInfo, "city": ""}); //reset choice of city if selected country changes
        }
    
    }, [selectedCountry]);

    const cityOptions = (citiesInCountry.length === 0) 
    ? null 
    : citiesInCountry.map(city => {return (<option value={city.id} key={city.id}>{city.name}</option>)});

    const countryOptions = (countries.length === 0) 
    ? null 
    : countries.map(country => {return (<option value={country.id} key={country.id}>{country.name}</option>)});

    return (
        <>
            <Row>
                <Col>
                <Form.Control as="select" name="country" value={selectedCountry} onChange={handleSelectCountry} required>
                    <option value="" disabled>Select country</option>
                    {countryOptions}
                </Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Control as="select" name="city" value={props.contactInfo.city} onChange={handleChange} required>
                    <option value="" disabled>Select city</option>
                    {cityOptions}
                </Form.Control>
                </Col>
            </Row>
        </>
    );
}

export default SelectCountryAndCity;