import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";

export default function ContactListItem({contact, contactID}) {

    let profileURL = `${contactID}`;

    return (
        <Row className="row contact-list-item">
            <Col className="fullname">{contact.name}</Col>
            <Col className="action"><Link to={profileURL}>View details</Link></Col>
        </Row>
    );
}