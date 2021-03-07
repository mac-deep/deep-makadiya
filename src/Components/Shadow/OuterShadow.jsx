import React from "react";
import "./Shadow.scss";

const OuterShadow = ({ children, circle }) => {
  return (
    <div className={`${circle}` ? "outer-shadow circle" : "outer-shadow"}>
      {children}
    </div>
  );
};

export default OuterShadow;
