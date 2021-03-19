import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import makeStyles from './InfoSkills.styles';
import InfoCard from './InfoCard';

const InfoSkills = () => {
  const classes = makeStyles();
  return (
    <Grid container spacing={3} className={classes.infoSkills}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6">HTML</Typography>
        <InfoCard value="80" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6">CSS</Typography>
        <InfoCard value="70" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6">ReactJs</Typography>
        <InfoCard value="70" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6">Firebase</Typography>
        <InfoCard value="50" />
      </Grid>
    </Grid>
  );
};

export default InfoSkills;
