import { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/AuthService";
import heroesService from "../services/HeroesService";

const authContext = createContext();

const initialState = {
  accessToken: "",
  name: "",
  email: "",
  gender: "",
  role: "",
};

const token = localStorage.getItem("token");

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);
  const [heroes, setHeroes] = useState([]);

  const onLogin = (authData) => {
    localStorage.setItem("token", authData.payload.token);
    setUser({
      accessToken: authData.payload.token,
      email: authData.payload.user.email,
      name: authData.payload.user.name,
      gender: authData.payload.user.gender,
      role: authData.payload.user.role,
    });
    console.log(authData);
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    setUser(initialState);
  };

  useEffect(() => {
    if (token) {
      authService.getCurrentUser(token).then((userData) => {
        setUser(userData);
        console.log(user);
      });
    }
  }, []);

  useEffect(() => {
    heroesService.GetAllHeroes().then((res) => {
      setHeroes(res);
    });
  }, [heroes]);

  const value = {
    user,
    onLogin,
    onLogout,
    token,
    heroes,
    setHeroes,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export const useAuthContext = () => {
  const authState = useContext(authContext);

  return authState;
};
