import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  addBtn: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
  },
  tipText: {
    display: 'none',
    '&:hover': {
      display: 'inline',
    },
  },
}));
