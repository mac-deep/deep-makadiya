import React from "react";
import "./Button.scss";

function Button({ children }) {
  return (
    <div className="btn">
      <div className="btn__container outer-shadow hover-in-shadow">
        {children}
      </div>
    </div>
  );
}

export default Button;
