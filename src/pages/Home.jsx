import {useContext} from "react";
import {UserContext}  from '../services/UserContext';

function Home() {

  const {user} = useContext(UserContext);
  const heading = (user.auth) ? `Welcome, ${user.name}.`: `Welcome, Guest.`;
  const message = (user.auth) ? `This is your Personal Contacts app.` : `Login to manage your Personal Contacts app.`;

    return (
      <>
        <h1>My Personal Contacts App</h1>
        <h2>{heading}</h2>
        <p>{message}</p>
      </>
    );
  }
  
export default Home;