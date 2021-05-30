import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    position: 'relative',
    padding: '1rem',
    borderRadius: 20,
    width: 900,
    backgroundColor: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(40px)',
    // height: 450,
  },
  thumbnail: {
    display: 'none',
  },
  closeBtn: {
    cursor: 'pointer',
    fontSize: '2rem',
    position: 'absolute',
    right: -10,
    top: -10,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
}));
