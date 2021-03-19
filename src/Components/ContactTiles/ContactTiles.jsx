import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import makeStyles from './ContactTiles.styles';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const ContactTiles = () => {
  const classes = makeStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper className={classes.tile}>
          <PhoneIcon color="primary" />
          <Typography variant="h5" color="textPrimary" gutterBottom>
            Phone
          </Typography>
          <Typography variant="body1" color="textSecondary">
            99999 99999
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper className={classes.tile}>
          <EmailIcon color="primary" />
          <Typography variant="h5" color="textPrimary" gutterBottom>
            Email
          </Typography>
          <Typography variant="body1" color="textSecondary">
            deep.makadiya25@gmail.com
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper className={classes.tile}>
          <LocationOnIcon color="primary" />
          <Typography variant="h5" color="textPrimary" gutterBottom>
            Location
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Ahmedabad, India
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ContactTiles;
