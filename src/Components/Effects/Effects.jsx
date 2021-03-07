import React from "react";
import "./effects.scss";
import Grid from "./Grid";
import ReactLogo from "./ReactLogo";
import SemiCircle from "./SemiCircle";
import Square from "./Square";

export default function Effects() {
  return (
    <div className="effect-wrap">
      <Square />
      <Grid />
      <SemiCircle />
      {/* <ReactLogo /> */}
    </div>
  );
}
