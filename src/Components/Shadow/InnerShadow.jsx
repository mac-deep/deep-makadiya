import React from "react";
import "./Shadow.scss";

const InnerShadow = ({ children }) => {
  return <div className="hover-in-shadow">{children}</div>;
};

export default InnerShadow;
