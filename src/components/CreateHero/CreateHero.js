import React, { useEffect, useState } from "react";
import "./CreateHero.css";
import Wrapper from "../Wrapper/Wrapper";
import classAndRaceService from "../../services/ClassAndRaceService";
import heroesService from "../../services/HeroesService";
import { useAuthContext } from "../../context/authContext";

const CreateHero = () => {
  const { setHeroes } = useAuthContext();
  const [races, setRaces] = useState([]);
  const [raceName, setRaceName] = useState("");
  const [raceIdValue, setRaceIdValue] = useState("");
  const [imgURLvalue, setImgURLvalue] = useState("");
  const [extraAbility, setExtraAbility] = useState("");

  const extraAbilityArray = [extraAbility];

  useEffect(() => {
    classAndRaceService
      .getAllRaces(1, 10)
      .then((response) => setRaces(response.payload.docs));
    console.log(raceName);
  }, [raceIdValue]);

  const createHeroSubmit = (e) => {
    e.preventDefault();

    heroesService
      .createHero(raceName, raceIdValue, imgURLvalue, extraAbilityArray)
      .then((response) => {
        if (response.success) {
          setHeroes(response.payload);
          alert(`${raceName} has been created!`);
        } else {
          console.log(response.message);
        }
      });
  };

  return (
    <Wrapper>
      <div className="wrapper-create-card">
        <h1>Create your hero card</h1>
        <form className="create-form" onSubmit={createHeroSubmit}>
          <label htmlFor="name">Enter Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter hero name"
            onChange={(e) => setRaceName(e.target.value)}
            value={raceName}
          />
          <label htmlFor="race">Choose Race:</label>
          <select
            id="race"
            name="race"
            onChange={(e) => setRaceIdValue(e.target.value)}
            value={raceIdValue}
          >
            {races.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
          <label htmlFor="img">Enter Image :</label>
          <input
            type="text"
            name="img"
            id="img"
            placeholder="Enter img url"
            onChange={(e) => setImgURLvalue(e.target.value)}
            value={imgURLvalue}
          />
          <label htmlFor="extraAbility">Enter Extra Ability:</label>
          <input
            type="text"
            id="extraAbility"
            name="extraAbility"
            placeholder="Enter extra ability"
            onChange={(e) => setExtraAbility(e.target.value)}
            value={extraAbility}
          />
          <button className="btn" type="submit">
            Create
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default CreateHero;
