import { makeStyles } from '@material-ui/core';

import { outerShadow } from '../../Theme/Colors';

export default makeStyles((theme) => ({
  paper: {
    padding: '20px',
    backgroundColor: 'transparent',
    boxShadow: outerShadow,
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  opp: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      flex: 0,
      padding: 0,
    },
  },
}));
