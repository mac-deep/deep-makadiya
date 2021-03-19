import { withStyles, IconButton } from '@material-ui/core';

import { outerShadow, innerShadow } from '../../Theme/Colors';

export const HoverButton = withStyles((theme) => ({
  root: {
    boxShadow: outerShadow,
    transform: 'all 0.3s ease',
    color: theme.palette.primary.light,

    '&:hover': {
      boxShadow: innerShadow,
      color: theme.palette.primary.main,
    },
  },
}))(IconButton);
