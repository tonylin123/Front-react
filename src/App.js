
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom_styles.css';
import {Routes, Route} from "react-router-dom";

import Layout from "./components/shared/Layout";
import Home from "./pages/Home";
import People from "./pages/PeopleList";
import Profile from './pages/Profile';

//import Logout from "./pages/Logout";
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="home" element={ <Home/> } />
          <Route path="contacts" element={ <People/> } />
          <Route path="contacts/:id" element={<Profile/>} />
          
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
