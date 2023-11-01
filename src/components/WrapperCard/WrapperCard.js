import React from "react";
import "./WrapperCard.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import heroesService from "../../services/HeroesService";

const WrapperCard = ({ hero, heroes, setHeroes }) => {
  const { avatar, name, race, _id } = hero;
  const { user } = useAuthContext();

  const handleDelete = (heroId) => {
    heroesService.deleteHero(heroId, user.accessToken).then((response) => {
      if (response.success) {
        const updatedHeroList = heroes.filter((hero) => hero._id !== heroId);
        setHeroes(updatedHeroList);
      }
    });
  };

  const adminNav = (
    <>
      <Link className="details" to={`/details/${_id}`}>
        Details
      </Link>
      <Link
        className="delete"
        to="/"
        onClick={() => {
          handleDelete(`${_id}`);
        }}
      >
        Delete
      </Link>
    </>
  );

  const normalUserNav = (
    <>
      <Link className="details-normal-user" to={`/details/${_id}`}>
        Details
      </Link>
    </>
  );

  return (
    <div className="wrapper-card">
      <div className="img-card">
        <img
          src={avatar}
          style={{
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderBottom: "3px solid darkorange",
            borderBottomLeftRadiusRadius: "15px",
          }}
          alt={name}
        />
      </div>
      <p className="name-and-race">{name}</p>
      <div className="card-nav">
        {user.role === "admin" ? adminNav : normalUserNav}
      </div>
    </div>
  );
};

export default WrapperCard;
