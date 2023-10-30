import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./RegisterPage.css";
import authService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");

  const registerSubmitHandler = (e) => {
    e.preventDefault();

    authService.register(name, email, password, gender).then((response) => {
      console.log(response);
      if (response.success) {
        navigate("/login");
      } else {
        alert(response.message); //toast
        console.log(response.message);
      }
    });
  };

  return (
    <Wrapper>
      <form className="register-form" onSubmit={registerSubmitHandler}>
        <h1>REGISTER</h1>
        <div className="name">
          <label htmlFor="name">Enter your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Enter your E-mail:</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <label htmlFor="password">Enter your Password:</label>
        <div className="password">
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
        <div className="gender">
          <label htmlFor="gender">Choose Gender:</label>
          <select
            id="gender"
            name="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
            value={gender}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <button className="btn">Register</button>
      </form>
    </Wrapper>
  );
};

export default RegisterPage;
