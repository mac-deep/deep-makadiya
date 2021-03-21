import { withStyles, IconButton, makeStyles } from '@material-ui/core';
import { outerShadow, innerShadow } from '../../Theme/Colors';

export const HoverButton = withStyles((theme) => ({
  root: {
    boxShadow: outerShadow,
    transform: 'all 0.3s ease',
    color: theme.palette.primary.light,

    '&:hover': {
      boxShadow: innerShadow,
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    },
  },
}))(IconButton);

export default makeStyles((theme) => ({
  container: {
    margin: '5px 0',
  },
  item: {
    padding: theme.spacing(1),
  },
}));
