import { withStyles, IconButton } from '@material-ui/core';
import { outerShadow, innerShadow } from '../Theme/Colors';

const CustomIconButton = withStyles((theme) => ({
  root: {
    boxShadow: outerShadow,
    transform: 'all 0.3s ease',
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.background.default,
    borderRadius: '20px',
    '&:hover': {
      boxShadow: innerShadow,
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    },
  },
}))(IconButton);
export default CustomIconButton;
