import { makeStyles } from '@material-ui/core';
import { outerShadow } from '../../Theme/Colors';

export default makeStyles((theme) => ({
  tile: {
    height: 180,
    boxShadow: outerShadow,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
