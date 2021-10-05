import React from 'react';
import { Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import useStyles from './SocialLinks.styles';
import CustomIconButton from '../../CustomUI/CustomIconButton';

const SocialLinks = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item className={classes.item}>
        <a href="https://github.com/mac-deep" target="_blank" rel="noopener noreferrer">
          <CustomIconButton disableFocusRipple disableRipple>
            <GitHubIcon />
          </CustomIconButton>
        </a>
      </Grid>
      <Grid item className={classes.item}>
        <a href="https://twitter.com/deepfromdawn" target="_blank" rel="noopener noreferrer">
          <CustomIconButton disableFocusRipple>
            <TwitterIcon />
          </CustomIconButton>
        </a>
      </Grid>
      <Grid item className={classes.item}>
        <a href="https://www.instagram.com/deepfromdawn" target="_blank" rel="noopener noreferrer">
          <CustomIconButton disableFocusRipple>
            <InstagramIcon />
          </CustomIconButton>
        </a>
      </Grid>
      <Grid item className={classes.item}>
        <a href="https://linkedin.com/in/deepmakadiya" target="_blank" rel="noopener noreferrer">
          <CustomIconButton disableFocusRipple>
            <LinkedInIcon />
          </CustomIconButton>
        </a>
      </Grid>
    </Grid>
  );
};

export default SocialLinks;
