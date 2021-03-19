import React from 'react';
import Title from '../../Components/Title/Title';
import Img from '../../Assets/profileImg.jpg';
import { Avatar, Container, Grid, Typography } from '@material-ui/core';
import useStyles from './AboutMe.styles';
import SocialLinks from '../../Components/SocialLinks/SocialLinks';
import InfoTabs from '../../Components/InfoTabs/InfoTabs';

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Container>
        <Title head="ABOUT ME" subHead="Main Info" />
        <Grid container xs={12} className={classes.myInfo_container}>
          <Grid item container lg={4} justify="center">
            <Grid item className={classes.myInfo_profileImg}>
              <div className={classes.outershadow}>
                <Avatar src={Img} variant="square" className={classes.profile} />
              </div>
            </Grid>
            <SocialLinks />
          </Grid>
          <Grid item lg={7} className={classes.myInfo_bio}>
            <Typography variant="body1" gutterBottom>
              Hi My name is Deep Makadiya. I am a Web Developer. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Natus harum praesentium commodi, non incidunt magnam itaque temporibus fugiat sunt, ex quidem
              reprehenderit, impedit quod a ad ullam voluptates dicta! Architecto.{' '}
            </Typography>
            <Typography variant="body1">
              Natus harum praesentium commodi, non incidunt magnam itaque temporibus fugiat sunt, ex quidem
              reprehenderit, impedit quod a ad ullam voluptates dicta! Architecto. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Perspiciatis debitis blanditiis est tenetur ipsum doloremque exercitationem
              ratione porro, officia ipsam reiciendis delectus illum quas nesciunt! Fugit et labore sint eaque?{' '}
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12} className={classes.infoTabs_container}>
          <InfoTabs />
        </Grid>
      </Container>
    </div>
  );
};

export default AboutMe;
