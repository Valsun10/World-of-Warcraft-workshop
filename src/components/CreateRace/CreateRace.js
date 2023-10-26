import React, { useEffect, useState } from "react";
import "./CreateRace.css";
import Wrapper from "../Wrapper/Wrapper";
import classAndRaceService from "../../services/ClassAndRaceService";
import { useNavigate } from "react-router-dom";

const CreateRace = () => {
  const [classes, setClasses] = useState([]);
  const [classIdValue, setClassIdValue] = useState("");
  const [raceInput, setRaceInput] = useState("");
  const [abilityOne, setAbilityOne] = useState("");
  const [abilityTwo, setAbilityTwo] = useState("");
  const [abilityThree, setAbilityThree] = useState("");

  const abilities = [abilityOne, abilityTwo, abilityThree];

  useEffect(() => {
    classAndRaceService.getAllClasses(1, 15).then((data) => {
      setClasses(data.payload.docs);
    });
  }, [classIdValue]);

  const clearInputs = () => {
    setRaceInput("");
    setAbilityOne("");
    setAbilityTwo("");
    setAbilityThree("");
  };

  const createRaceSubmitHandler = (e) => {
    e.preventDefault();

    classAndRaceService
      .createRace(raceInput, classIdValue, abilities)
      .then((response) => {
        if (response.success) {
          alert(`${raceInput} has been created!`);
          clearInputs();
        }
      });
  };

  return (
    <Wrapper>
      <h1 className="create-race-heading">Create Race</h1>
      <form className="create-class-form" onSubmit={createRaceSubmitHandler}>
        <label htmlFor="race">Enter Race:</label>
        <input
          type="text"
          id="race"
          name="race"
          placeholder="Enter race here"
          onChange={(e) => setRaceInput(e.target.value)}
          value={raceInput}
        />
        <label htmlFor="class">Choose Class:</label>
        <select
          id="class"
          name="class"
          onChange={(e) => setClassIdValue(e.target.value)}
          value={classIdValue}
        >
          {classes.map((classEl) => (
            <option className="options" key={classEl._id} value={classEl._id}>
              {classEl.name}
            </option>
          ))}
        </select>
        <label htmlFor="abilities">Enter abilities:</label>
        <input
          type="text"
          id="abilities"
          name="abilities"
          placeholder="Enter ability one!"
          onChange={(e) => setAbilityOne(e.target.value)}
          value={abilityOne}
        />
        <input
          type="text"
          id="abilities"
          name="abilities"
          placeholder="Enter ability two!"
          onChange={(e) => setAbilityTwo(e.target.value)}
          value={abilityTwo}
        />
        <input
          type="text"
          id="abilities"
          name="abilities"
          placeholder="Enter ability three!"
          onChange={(e) => setAbilityThree(e.target.value)}
          value={abilityThree}
        />

        <button type="submit" className="btn">
          Create
        </button>
      </form>
    </Wrapper>
  );
};

export default CreateRace;
