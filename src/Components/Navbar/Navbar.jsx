import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import CustomFab from '../../CustomUI/CustomFab';
import CustomIconButton from '../../CustomUI/CustomIconButton';
import useStyles from './Navbar.styles';

const Navbar = ({ handleClose }) => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <Typography color="primary" className={classes.copyright}>
        &copy; 2021 Deep Makadiya
      </Typography>
      <Container maxWidth="sm" className={classes.navlist}>
        <CustomIconButton onClick={handleClose} disableFocusRipple disableRipple className={classes.closeBtn}>
          <CloseIcon />
        </CustomIconButton>
        <Link to="/">
          <CustomFab onClick={handleClose} variant="extended">
            <Typography variant="h5">Home</Typography>
          </CustomFab>
        </Link>
        <Link to="/aboutme">
          <CustomFab onClick={handleClose} variant="extended">
            <Typography variant="h5">About</Typography>
          </CustomFab>
        </Link>
        <Link to="/portfolio">
          <CustomFab variant="extended" onClick={handleClose}>
            <Typography variant="h5">Portfolio</Typography>
          </CustomFab>
        </Link>
        <Link to="/contact">
          <CustomFab onClick={handleClose} variant="extended">
            <Typography variant="h5">Contact</Typography>
          </CustomFab>
        </Link>
      </Container>
    </div>
  );
};

export default Navbar;
