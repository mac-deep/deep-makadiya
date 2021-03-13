import { Grid, IconButton } from "@material-ui/core";
import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { HoverButton } from "./SocialLinks.styles";

const SocialLinks = () => {
    return (
        <Grid item container xs={12} justify="center">
            <Grid item xs={2}>
                <HoverButton disableFocusRipple>
                    <GitHubIcon />
                </HoverButton>
            </Grid>
            <Grid item xs={2}>
                <HoverButton disableFocusRipple>
                    <TwitterIcon />
                </HoverButton>
            </Grid>
            <Grid item xs={2}>
                <HoverButton disableFocusRipple>
                    <InstagramIcon />
                </HoverButton>
            </Grid>
            <Grid item xs={2}>
                <HoverButton disableFocusRipple>
                    <LinkedInIcon />
                </HoverButton>
            </Grid>
        </Grid>
    );
};

export default SocialLinks;
