import React from "react";

export const Tweet = ({ name, message }) => {
  return (
    <>
      <h2>{name}</h2>
      <h3>{message}</h3>
      <button>Delet</button>
      <button>Like</button>
    </>
  );
};