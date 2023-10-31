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
    setUser({
      accessToken: authData.payload.token,
      email: authData.payload.user.email,
      name: authData.payload.user.name,
      gender: authData.payload.user.gender,
      role: authData.payload.user.role,
    });
    localStorage.setItem("token", authData.payload.token);
  };

  const onLogout = () => {
    setUser(initialState);
    localStorage.removeItem("token");
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
