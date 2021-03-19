import { makeStyles } from '@material-ui/core';

const outerShadow = '3px 3px 3px #222327, -3px -3px 3px #363636';

export default makeStyles((theme) => ({
  paper: {
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: '#2b2c2f',
    transition: 'all 0.3s ease',
    padding: '30px 0',
    // overflowY: 'scroll',
  },
  actionBtn: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  details_container: {
    width: '100%',
    color: 'white',
    padding: '50px 0',
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
}));
