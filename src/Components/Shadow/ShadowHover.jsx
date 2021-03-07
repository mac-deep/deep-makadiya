import React from "react";
import "./Shadow.scss";

const ShadowHover = ({ children }) => {
  return <div className="outer-shadow hover-in-shadow">{children}</div>;
};

export default ShadowHover;
