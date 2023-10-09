import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import WrapperCard from "../WrapperCard/WrapperCard";
import "./HomePage.css";
import heroesService from "../../services/HeroesService";
import { useAuthContext } from "../../context/authContext";

const GuestPage = () => {
  const { heroes } = useAuthContext();

  return (
    <>
      <Wrapper>
        <h1 className="guest-title">All Cards in the Game</h1>
        {heroes.length <= 0 ? (
          <p className="spinner">There are no cards in database!</p>
        ) : (
          heroes.map((hero) => <WrapperCard key={hero._id} hero={hero} />)
        )}
      </Wrapper>
    </>
  );
};

export default GuestPage;
