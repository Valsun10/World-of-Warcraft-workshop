import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import "./DetailsPage.css";
import heroesService from "./../../services/HeroesService";

const DetailsPage = () => {
  const { heroId } = useParams();
  const [hero, setHero] = useState({});

  useEffect(() => {
    heroesService.getHero(heroId).then((res) => {
      setHero(res.payload);
      console.log(res);
    });
  }, []);

  const { avatar, name, race } = hero;

  if (!hero) {
    return <p>Spinner</p>;
  }

  return (
    <Wrapper>
      <div className="wrapper-details">
        <img src={avatar} alt="ThrallPic" />
        <h1>{name}</h1>
        {/* <p>{race.name}</p>
        <p>{race.heroClas}</p>
        <div className="abilities">
          <span>{race.abilities[0]}</span>
          <span>{race.abilities[1]}</span>
          <span>{race.abilities[2]}</span>
        </div> */}
      </div>
    </Wrapper>
  );
};

export default DetailsPage;
