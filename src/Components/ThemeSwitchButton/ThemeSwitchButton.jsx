import React from "react";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const ThemeSwitchButton = ({ darkmode, setDarkmode }) => {
  return (
    <>
      {darkmode ? (
        <Brightness7Icon onClick={() => setDarkmode(!darkmode)} />
      ) : (
        <Brightness4Icon onClick={() => setDarkmode(!darkmode)} />
      )}
    </>
  );
};

export default ThemeSwitchButton;
