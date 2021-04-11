import { makeStyles } from '@material-ui/core';
import { outerShadow, biggerOuterShadow } from '../../Theme/Colors';

export default makeStyles((theme) => ({
  root: {
    width: 300,
    boxShadow: outerShadow,
    borderRadius: 20,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: biggerOuterShadow,
      backgroundColor: '#363636',
    },
  },
  media: {
    height: 150,
    margin: '10px 10px 0 10px',
    borderRadius: '1em',
  },
}));
