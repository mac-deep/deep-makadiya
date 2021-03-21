import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import makeStyles from './InfoSkills.styles';
import InfoCard from './InfoCard';

const InfoSkills = () => {
  const classes = makeStyles();
  return (
    <Grid container spacing={3} className={classes.infoSkills}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6">
          <i className="fab fa-html5" /> HTML
        </Typography>
        <InfoCard value={80} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6">
          <i className="fab fa-css3-alt" /> CSS
        </Typography>
        <InfoCard value={70} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6">
          <i className="fab fa-js" /> JavaScript
        </Typography>
        <InfoCard value={50} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6">
          <i className="fab fa-react" /> React
        </Typography>
        <InfoCard value={60} />
      </Grid>
    </Grid>
  );
};

export default InfoSkills;
