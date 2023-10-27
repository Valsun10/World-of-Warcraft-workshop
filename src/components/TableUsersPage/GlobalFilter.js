import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ filter, setFilter }) => {
  const [searchValue, setSeatchValue] = useState(filter);

  const onChangeHandler = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 600);

  return (
    <span style={{ color: "darkorange", fontSize: "22px" }}>
      Search user:
      <input
        type="text"
        style={{
          width: "200px",
          height: "35px",
          margin: "0 0 10px 15px",
          background: "transparent",
          border: "1px solid darkorange",
          outline: "none",
          color: "white",
          padding: "7px",
        }}
        placeholder="Enter user"
        value={searchValue || ""}
        onChange={(e) => {
          setSeatchValue(e.target.value);
          onChangeHandler(e.target.value);
        }}
      />
    </span>
  );
};

export default GlobalFilter;
