import { makeStyles } from '@material-ui/core/styles';
import { outerShadow } from '../../Theme/Colors';

const drawerWidth = 300;

export default makeStyles((theme) => ({
  root: {
    zIndex: 100,
    height: '100vh',
    display: 'flex',
  },
  sidebar: {
    display: 'flex',
    flex: '0 0 25%',
  },
  sidebar_container: {
    margin: '1rem',
    width: '100%',
    boxShadow: outerShadow,
    borderRadius: '30px',
    paddingTop: 100,
  },
  content: {
    display: 'flex',
    flex: '0 0 75%',
  },
  content_container: {
    margin: '1rem',
    padding: '1rem',
    flex: 1,
    boxShadow: outerShadow,
    borderRadius: '30px',
  },
}));
