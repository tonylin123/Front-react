import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function ContactListItem({contact, contactID}) {

    let profileURL = `${contactID}`;

    return (
        <Row className="row contact-list-item">
            <Col className="fullname">{contact.name}</Col>
            <Col className="Phone">{contact.phone}</Col>
            <Col className="action"><Link to={profileURL}><Button variant="danger">View details</Button></Link></Col>
        </Row>
    );
}