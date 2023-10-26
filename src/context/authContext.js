import { createContext, useContext, useState } from "react";

const authContext = createContext();

const initialState = {
  accessToken: "",
  name: "",
  email: "",
  gender: "",
  role: "",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

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

  const value = {
    user,
    setUser,
    onLogin,
    onLogout,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export const useAuthContext = () => {
  const authState = useContext(authContext);

  return authState;
};
