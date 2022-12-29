import {useState, useEffect, useContext} from "react";
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {ContactsContext}  from '../services/ContactsContext';
import {UserContext}  from '../services/UserContext';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import SelectCountryAndCity from '../components/shared/SelectCountryAndCity';
import SelectLanguages from '../components/shared/SelectLanguages';

function Profile() {

    const {user} = useContext(UserContext);

    const {getContact} = useContext(ContactsContext);
    const {updateContact} = useContext(ContactsContext);
    const {deleteContact} = useContext(ContactsContext);

    const navigate = useNavigate();
    
    let {id} = useParams();

    const initialValues = {
        id: id,
        name: "",
        phone: "",
        city: "",
        languages: [],
    };

    const [contact, setContact] = useState(initialValues);
    const [contactInfo, setContactInfo] = useState(initialValues);

    const fetchContact = async () => {
        let contact = await getContact(id);
        setContact(contact);
        setContactInfo(contact);
    }

    useEffect(() => {
        fetchContact();
    }, []);

    const [editMode, setEditMode] = useState({display: "none"});
    const [viewMode, setViewMode] = useState({display: "block"});

    const handleEditContact = () => {
        setEditMode({display: "block"});
        setViewMode({display: "none"});
    }

    const handleChange = (event) => {
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        updateContact(id, contactInfo);
        fetchContact();

        setEditMode({display: "none"});
        setViewMode({display: "block"});
    };

    const handleCancelEdit = () => {
    setContactInfo(contact); //reset to original values
    setEditMode({display: "none"});
    setViewMode({display: "block"});
    };

    const handleDeleteContact = async (id) => {
        await deleteContact(id);
        navigate("/contacts");
    }

    if (user.auth === false) 
    {
        return (<Navigate to="/login"/>);
    }

    return (
        <>
        <h2>Contact details for {contactInfo.name}</h2>
        <div className="view-contactinfo" style={viewMode}>
            <p className="name"><b>Name:</b> {contactInfo.name}</p>
            <p className="phone"><b>Phone:</b> {contactInfo.phone}</p>
            <p className="city"><b>City:</b> {contactInfo.city}</p>
            <p className="languages"><b>Languages:</b> {contactInfo.languages}</p>
            <p className="action">
                {/* <Button variant="primary" type="button" onClick={handleEditContact}>Edit</Button> */}
                <Button variant="primary" type="button" onClick={() => handleDeleteContact(id)}>Delete</Button>
            </p>
        </div>
        {/* <div style={editMode}>
            <Form className="edit-contactinfo" onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Control type="hidden" name="name" value={id} readOnly/>
                    </Col>
                </Row>
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
                
                <Button variant="primary" type="submit">Update</Button>
                <Button variant="warning" type="button" onClick={handleCancelEdit}>Cancel</Button>
            </Form>
        </div> */}
        </>
    );
}

export default Profile;