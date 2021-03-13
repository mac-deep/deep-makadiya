import React from "react";
import "./HomePage.scss";
import Img from "../../Assets/profileImg.jpg";
// import "../../main.scss";
import Button from "../../Components/Button/Button";
import Effects from "../../Components/Effects/Effects.jsx";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, Container, Fab, Grid, IconButton, Typography } from "@material-ui/core";
import makeStyles, { CustomFab } from "./HomePage.styles";

const Home = () => {
    const classes = makeStyles();
    return (
        <div>
            <Effects />
            <Container maxWidth="lg" className={classes.homepage}>
                <Grid container alignItems="center" className={classes.fullHeight}>
                    <Grid item lg={6}>
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
                    <Grid item lg={6}>
                        <div className={classes.imageBox}>
                            <Avatar src={Img} variant="rounded" className={classes.profileImg} />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
