import { Grid } from '@material-ui/core';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { HoverButton } from './SocialLinks.styles';

const SocialLinks = () => {
  return (
    <Grid item container xs={12} justify="center">
      <Grid item xs={2}>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
          <HoverButton disableFocusRipple disableRipple>
            <GitHubIcon />
          </HoverButton>
        </a>
      </Grid>
      <Grid item xs={2}>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <HoverButton disableFocusRipple>
            <TwitterIcon />
          </HoverButton>
        </a>
      </Grid>
      <Grid item xs={2}>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <HoverButton disableFocusRipple>
            <InstagramIcon />
          </HoverButton>
        </a>
      </Grid>
      <Grid item xs={2}>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <HoverButton disableFocusRipple>
            <LinkedInIcon />
          </HoverButton>
        </a>
      </Grid>
    </Grid>
  );
};

export default SocialLinks;
