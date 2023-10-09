import React, { useEffect, useState } from "react";
import "./ProfilePage.css";

import Wrapper from "../Wrapper/Wrapper";
import { useAuthContext } from "../../context/authContext";

const ProfilePage = () => {
  const { user } = useAuthContext();

  return (
    <>
      <Wrapper>
        <div className="profile">
          <img src={user.avatar} alt="profilepic" className="profile-picture" />
          <div className="profile-details">
            <h1>Email: {user.email}</h1>
            <p>Name: {user.name}</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="favourite-cards"></div>
        </div>
      </Wrapper>
    </>
  );
};

export default ProfilePage;
