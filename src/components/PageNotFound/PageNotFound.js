import React from "react";
import "./PageNotFound.css";
import Wrapper from "../Wrapper/Wrapper";

const PageNotFound = () => {
  return (
    <Wrapper>
      <h1
        style={{
          fontSize: "70px",
          textAlign: "center",
          paddingTop: "150px",
          color: "burlywood",
          height: "60vh",
        }}
      >
        PAGE NOT FOUND
      </h1>
    </Wrapper>
  );
};

export default PageNotFound;
