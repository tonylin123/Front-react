import {Link} from "react-router-dom";

function PageNotFound() {

    return (
      <>
        <h1>My Personal Contacts App</h1>
        <h2>404 &mdash; Page Not Found</h2>
        <p>Oops! Seems like the page you are looking for cannot be found. Our team of highly trained cybermonkeys are investigating the issue.</p>
        <p>Meanwhile, please return to the {<Link to="/">homepage</Link>}.</p>
      </>
    );
  }
  
export default PageNotFound;