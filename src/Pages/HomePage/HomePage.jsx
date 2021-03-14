import React from "react";
import "./HomePage.scss";
import Img from "../../Assets/profileImg.jpg";
// import "../../main.scss";
import Button from "../../Components/Button/Button";
import Effects from "../../Components/Effects/Effects.jsx";
import { Avatar, Container, Fab, Grid, IconButton, Typography } from "@material-ui/core";
import makeStyles, { CustomFab } from "./HomePage.styles";
import { HoverButton } from "../../Components/SocialLinks/SocialLinks.styles";
import Navbar from "../../Components/Navbar/Navbar";
import Modal from "@material-ui/core/Modal";

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
                            <Typography variant="body2">Hello</Typography>
                            <Typography variant="h3">I'm Deep Makadiya</Typography>
                            <Typography variant="h6">Web Designer & Developer</Typography>
                            <CustomFab
                                variant="extended"
                                size="medium"
                                disableFocusRipple
                                color="inherit"
                            >
                                More About Me
                            </CustomFab>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.imageBox}>
                        <Avatar src={Img} variant="circle" className={classes.profileImg} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
