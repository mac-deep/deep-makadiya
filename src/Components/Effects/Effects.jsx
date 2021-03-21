import React from 'react';
import Circle from './Circle';

import './effects.scss';
import Grid from './Grid';
import ReactLogo from './ReactLogo';
import SemiCircle from './SemiCircle';
import Square from './Square';
import Triangle from './Triangle';

export default function Effects() {
  return (
    <div className="effect-wrap">
      <Square />
      <Grid />
      <SemiCircle />
      <ReactLogo />
      <Triangle />
      <Circle />
    </div>
  );
}
