import React, { useState } from "react";
import "./CreateClass.css";
import Wrapper from "../Wrapper/Wrapper";
import classAndRaceService from "../../services/ClassAndRaceService";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

const CreateClass = () => {
  const [classInput, setClassInput] = useState("");
  const { token } = useAuthContext();

  const classSubmitHandler = (e) => {
    e.preventDefault();

    classAndRaceService.createClass(classInput, token).then((response) => {
      if (response.success) {
        setClassInput("");
        alert(`${classInput} has been created!`);
      } else {
        console.log(response.message);
      }
    });
  };

  return (
    <Wrapper>
      <h1 className="create-class-heading">Create Class</h1>
      <form className="create-class-form" onSubmit={classSubmitHandler}>
        <label htmlFor="class">Enter Class:</label>
        <input
          type="text"
          id="class"
          name="class"
          placeholder="Enter class here"
          onChange={(e) => setClassInput(e.target.value)}
          value={classInput}
        />
        <button type="submit" className="btn">
          Create
        </button>
      </form>
    </Wrapper>
  );
};

export default CreateClass;
