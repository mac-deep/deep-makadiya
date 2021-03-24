import React from 'react';
import { Avatar, Container, Grid, Typography } from '@material-ui/core';

import Img from '../../Assets/profileImg.jpg';
import Title from '../../Components/Title/Title';
import SocialLinks from '../../Components/SocialLinks/SocialLinks';
import InfoTabs from '../../Components/InfoTabs/InfoTabs';
import useStyles from './AboutMe.styles';

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Container>
        <Title head="ABOUT ME" subHead="Main Info" />
        <Grid container spacing={3}>
          <Grid item container xs={12} lg={4} md={5} justify="center" flex="column">
            <Grid item className={classes.myInfo_profileImg}>
              <div className={classes.outershadow}>
                <Avatar src={Img} variant="square" className={classes.profile} />
              </div>
            </Grid>
            <SocialLinks />
          </Grid>
          <Grid item xs={12} lg={8} md={7} className={classes.myInfo_bio}>
            <Typography variant="body1" gutterBottom>
              My name is <span className={classes.highlight}>Deep Makadiya</span>. Currently in the 4th sem, pursuing my
              BE. I love to design stunning websites and find solutions for real-world problems. Quick learning and
              Teamwork is my strength. Looking for the opportunity to work as a Web Developer or Designer.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Grid container className={classes.infoTabs_container}>
        <InfoTabs />
      </Grid>
    </div>
  );
};

export default AboutMe;
