import React from 'react';
import { Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import useStyles, { HoverButton } from './SocialLinks.styles';

const SocialLinks = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item className={classes.item}>
        <a href="https://github.com/mac-deep" target="_blank" rel="noopener noreferrer">
          <HoverButton disableFocusRipple disableRipple>
            <GitHubIcon />
          </HoverButton>
        </a>
      </Grid>
      <Grid item className={classes.item}>
        <a href="https://twitter.com/macdeep_" target="_blank" rel="noopener noreferrer">
          <HoverButton disableFocusRipple>
            <TwitterIcon />
          </HoverButton>
        </a>
      </Grid>
      <Grid item className={classes.item}>
        <a href="https://www.instagram.com/therabbitteeth_" target="_blank" rel="noopener noreferrer">
          <HoverButton disableFocusRipple>
            <InstagramIcon />
          </HoverButton>
        </a>
      </Grid>
      <Grid item className={classes.item}>
        <a href="https://linkedin.com/in/deep-makadiya-1908b6190" target="_blank" rel="noopener noreferrer">
          <HoverButton disableFocusRipple>
            <LinkedInIcon />
          </HoverButton>
        </a>
      </Grid>
    </Grid>
  );
};

export default SocialLinks;
