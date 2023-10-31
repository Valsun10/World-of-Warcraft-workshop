import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import "./DetailsPage.css";
import heroesService from "./../../services/HeroesService";
import { useAuthContext } from "../../context/authContext";

const DetailsPage = () => {
  const { heroId } = useParams();
  const [hero, setHero] = useState({
    avatar: "",
    name: "",
    race: "",
    class: "",
    abilityOne: "",
    abilityTwo: "",
    abilityThree: "",
  });
  const { user } = useAuthContext();

  useEffect(() => {
    heroesService.getHero(heroId, user.accessToken).then((res) => {
      setHero({
        avatar: res.payload.avatar,
        name: res.payload.name,
        race: res.payload.race.name,
        class: res.payload.race.heroClass.name,
        abilityOne: res.payload.race.abilities[0],
        abilityTwo: res.payload.race.abilities[1],
        abilityThree: res.payload.race.abilities[2],
      });
    });
  }, []);

  return (
    <Wrapper>
      <div className="wrapper-details">
        <img src={hero.avatar} alt="ThrallPic" />
        <h1>{hero.name}</h1>
        <p>{hero.race}</p>
        <p>{hero.class}</p>
        <div className="abilities">
          <span>{hero.abilityOne}</span>
          <span>{hero.abilityTwo}</span>
          <span>{hero.abilityThree}</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default DetailsPage;
