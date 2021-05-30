import { makeStyles } from '@material-ui/core/styles';
import { outerShadow } from '../../Theme/Colors';

export default makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    // minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10vh',
  },
  paper: {
    boxShadow: outerShadow,
    borderRadius: '40px',
  },
  content: {
    padding: '40px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  avatar: {
    borderRadius: '40px',
    marginBottom: '40px',
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  margins: {
    marginBottom: '20px',
  },
}));
