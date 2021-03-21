import { makeStyles } from '@material-ui/core';
import { outerShadow } from '../../Theme/Colors';

export default makeStyles((theme) => ({
  paper: {
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    transition: 'all 0.3s ease',
    padding: '30px 0',
    overflowX: 'hidden',
  },
  actionBtn: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  details_container: {
    width: '100%',
    color: 'white',
  },
  imgBox: {
    margin: '10px',
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    padding: 10,
    boxShadow: outerShadow,
  },
  handleBtn: {
    borderRadius: '50%',
    boxShadow: outerShadow,
  },
  divider: {
    margin: '10px 0',
  },
  whiteText: {
    color: 'white',
  },
  chips: {
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.3),
    },
  },
}));
