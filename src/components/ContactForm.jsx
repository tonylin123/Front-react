import {useState, useContext} from "react";
import {ContactsContext}  from '../services/ContactsContext';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import SelectCountryAndCity from './shared/SelectCountryAndCity';
import SelectLanguages from './shared/SelectLanguages';

export default function ContactForm() {

  const {addContact} = useContext(ContactsContext);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    city: "",
    languages: [],
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(contactInfo);
    setContactInfo({ name: "", phone: "", city: "", languages: []}); //reset form values after submit
  };

    return (
      <div className="contact-form-container">

        <h2>Add Contact</h2>

        <Form className="contact-form" onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Control type="text" name="name" placeholder="Full name" value={contactInfo.name} onChange={handleChange} required/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Control type="text" name="phone" placeholder="Phone number" value={contactInfo.phone} onChange={handleChange} required/>
                </Col>
            </Row>
            <SelectCountryAndCity contactInfo={contactInfo} setContactInfo={setContactInfo}/>
            <SelectLanguages contactInfo={contactInfo} setContactInfo={setContactInfo}/>
            <Button variant="primary" type="submit">Add Contact</Button>
        </Form>
      </div>
    );
  }