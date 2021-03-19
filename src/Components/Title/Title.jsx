import { Typography } from '@material-ui/core';
import React from 'react';
import './Title.scss';

const Title = ({ head, subHead }) => {
  return (
    <div className="title">
      <div className="title__container">
        <Typography variant="body1" color="primary">
          {subHead}
        </Typography>
        <Typography variant="h4" color="textPrimary">
          {head}
        </Typography>
      </div>
    </div>
  );
};

export default Title;
