import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import authService from "../../services/AuthService";
import { useAuthContext } from "../../context/authContext";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";

const LoginPage = () => {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { onLogin } = useAuthContext();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((state) => !state);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    authService.login(emailInputValue, passwordInputValue).then((response) => {
      if (response.success) {
        onLogin(response);
        navigate("/");
      } else {
        console.log(response.message);
      }
    });
  };

  return (
    <Wrapper>
      <form className="login-form" onSubmit={submitHandler}>
        <h1>LOG IN</h1>
        <div className="email">
          <label htmlFor="email">Enter your E-mail:</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmailInputValue(e.target.value)}
            value={emailInputValue}
          />
        </div>
        <label htmlFor="password">Enter your Password:</label>
        <div className="password">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            onChange={(e) => setPasswordInputValue(e.target.value)}
            value={passwordInputValue}
          />
          <div className="show-pass" onClick={handleShowPassword}>
            {!showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
          </div>
        </div>
        <button className="btn">Login</button>
      </form>
    </Wrapper>
  );
};

export default LoginPage;
