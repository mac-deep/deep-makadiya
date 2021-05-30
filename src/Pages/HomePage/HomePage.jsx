import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Box, Container, Grid, Typography } from '@material-ui/core';

import Img from '../../Assets/profileImg.jpg';
import Effects from '../../Components/Effects/Effects.jsx';
import useStyles from './HomePage.styles';
import CustomFab from '../../CustomUI/CustomFab';
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homepage}>
      <Effects className={classes.effects} />
      <Container maxWidth="lg">
        <Grid container alignItems="center" justify="center" className={classes.fullHeight}>
          <Box clone order={{ xs: 2, md: 1 }} className={classes.info}>
            <Grid item container xs={12} md={6} justify="center">
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  Hello
                </Typography>
                <Typography variant="h3" color="textPrimary">
                  I'm Deep Makadiya
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Web Designer & Developer
                </Typography>
                <Link to="/aboutme">
                  <CustomFab variant="extended" disableFocusRipple color="inherit">
                    More About Me
                  </CustomFab>
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Box clone order={{ xs: 1, md: 2 }}>
            <Grid item className={classes.imageBox}>
              <div className={classes.outershadow}>
                <Avatar src={Img} variant="circular" className={classes.profileImg} />
              </div>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
