import React from 'react';
import './HomePage.scss';
import Img from '../../Assets/profileImg.jpg';
import Effects from '../../Components/Effects/Effects.jsx';
import { Avatar, Container, Grid, Typography } from '@material-ui/core';
import makeStyles, { CustomFab } from './HomePage.styles';

const Home = () => {
  const classes = makeStyles();

  return (
    <div className={classes.homepage}>
      <Effects className={classes.effects} />
      <Container maxWidth="lg">
        <Grid container alignItems="center" className={classes.fullHeight}>
          <Grid item container lg={6}>
            <Grid item md={2} xs={0}></Grid>
            <Grid item md={10} xs={12}>
              <Typography variant="body2" color="textSecondary">
                Hello
              </Typography>
              <Typography variant="h3" color="textPrimary">
                I'm Deep Makadiya
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Web Designer & Developer
              </Typography>
              <CustomFab variant="extended" size="medium" disableFocusRipple color="inherit">
                More About Me
              </CustomFab>
            </Grid>
          </Grid>
          <Grid item className={classes.imageBox}>
            <div className={classes.outershadow}>
              <Avatar src={Img} variant="circular" className={classes.profileImg} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
