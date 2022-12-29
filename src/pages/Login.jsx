import {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext}  from '../services/UserContext';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Login() {
    
    const {login} = useContext(UserContext);
    const [loginInfo, setLoginInfo] = useState({username: ""});
    const navigate = useNavigate();
    
    const handleChange = (event) => {
    setLoginInfo({...loginInfo, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = (event) => {
    event.preventDefault();
    login(loginInfo);
    navigate(-1); //redirect to previous page in browser history
    };


    return (
        <>
            <h1>Login</h1>
            <Form className="login-form" onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Control type="text" name="username" placeholder="Username" value={loginInfo.username} onChange={handleChange} required/>
                </Col>
            </Row>

            <Button variant="primary" type="submit">Login</Button>
        </Form>
        </>
    );
}

export default Login;