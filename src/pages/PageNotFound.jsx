import {Link} from "react-router-dom";

function PageNotFound() {

    return (
      <>
        <h1>People Contact List</h1>
        <h2> Page Not Found</h2>
        
        <p>Return to the {<Link to="/">homepage</Link>}.</p>
      </>
    );
  }
  
export default PageNotFound;