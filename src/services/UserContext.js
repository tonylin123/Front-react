import { React, useState, createContext } from "react";

export const UserContext = createContext();

export function UserProvider({children}) {

  const [user, setUser] = useState({name: '', auth: false});

  const login = (user) => {
    setUser({name: user.username, auth: true});
  }

  const logout = () => {
    setUser({name: '', auth: false});
  }

  const themes = {
    light: {
      textColor: "#303030",
      bgColor: "#fff"
    },
    dark: {
      textColor: "#fff",
      bgColor: "#303030"
    }
  };

  const [themeName, setThemeName] = useState("light");
  const [theme, setTheme] = useState(themes[themeName]);

  const toggleTheme = () => {

    if (themeName === "light")
    {
      setThemeName("dark");
      setTheme(themes.dark);
    }
    else
    {
      setThemeName("light");
      setTheme(themes.light);
    }
  }

  return (
    <UserContext.Provider value={{user, login, logout, themeName, theme, toggleTheme}}>
      {children}
    </UserContext.Provider>
  );

}