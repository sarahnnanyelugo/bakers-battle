import React from "react";

export const Title = (props) => {
  const { text, colr } = props;
  return <h1 style={{ color: colr, fontSize: "90px" }}>{text}</h1>;
};
