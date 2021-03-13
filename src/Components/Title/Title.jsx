import React from "react";
import "./Title.scss";

const Title = ({head, subHead}) => {
  return (
    <div className="title">
      <div className="title__container">
        <h4>{subHead}</h4>
        <h1>{head} </h1>
      </div>
    </div>
  );
};

export default Title;
