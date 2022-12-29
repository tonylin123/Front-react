import {useContext} from "react";
import {UserContext}  from '../../services/UserContext';
import Navigation from "./Navigation";
import HistoryButtons from "./HistoryButtons";
import ThemeToggler from "./ThemeToggler";

function Layout({children}) {

    const {user} = useContext(UserContext);
    const userStatus = (user.auth) ? `Logged in as '${user.name}'.` : `(Not logged in.)`;
    const themeToggler = (user.auth) ? <ThemeToggler/> : null;

    return (
    <>
        <header>
            <div>
                <Navigation />
                <HistoryButtons/>
            </div>
            <div>
                <p><b>Login status:</b> {userStatus}</p>
                {themeToggler}
            </div>
        </header>
        
        <main>
            {children}
        </main>

        <footer>
            <span>&copy; Jenny Rigsjö</span>
        </footer>
    </>
    );
}

export default Layout;