import { makeStyles } from '@material-ui/core/styles';
import { outerShadow } from '../../Theme/Colors';

export default makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
  },
  paper: {
    boxShadow: outerShadow,
  },
  content: {
    padding: '40px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  avatar: {
    marginBottom: '40px',
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  margins: {
    marginBottom: '20px',
  },
}));
