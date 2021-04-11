import { makeStyles } from '@material-ui/core/styles';
import { outerShadow, innerShadow } from '../../Theme/Colors';

export default makeStyles((theme) => ({
  profile: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    borderRadius: '1em',
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  },
  outershadow: {
    padding: '12px',
    boxShadow: outerShadow,
    borderRadius: '20px',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  myInfo_profileImg: {
    boxShadow: innerShadow,
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '20px',
  },
  myInfo_bio: {
    color: theme.palette.text.secondary,
  },
  infoTabs_container: {
    minHeight: '100vh',
  },
  highlight: {
    color: theme.palette.primary.light,
  },
}));
