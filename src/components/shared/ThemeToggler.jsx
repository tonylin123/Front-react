import {useContext, useEffect} from "react";
import {UserContext}  from '../../services/UserContext';

import Button from 'react-bootstrap/Button';

function ThemeToggler() {

    const {theme} = useContext(UserContext);
    const {themeName} = useContext(UserContext);
    const {toggleTheme} = useContext(UserContext);

    const updateCSS = (theme) => {
        for (const prop in theme) {
          document.documentElement.style.setProperty(`--${prop}`, theme[prop]);
        }
    };

    useEffect(() => {
        updateCSS(theme);
    });

    return (
        <>
            <Button className="theme" variant="primary" type="button" onClick={toggleTheme}>Toggle theme</Button>
            <p>Current theme: {themeName}</p>
        </>
    );
}

export default ThemeToggler;